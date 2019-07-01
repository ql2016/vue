<template>
    <div class="addressWrap">
        <div class="address-header">
          <ul>
            <li :class="{'active': tab === 1}" @click="resetProvince">{{  currentProvince ? currentProvince : placeholders.province }}</li>
            <li v-if="showCityTab" :class="{'active': tab === 2}" @click="resetCity">{{  currentCity ? currentCity : placeholders.city }}</li>
            <li v-if="showAreaTab" :class="{'active': tab === 3}" @click="resetArea">{{ currentArea ? currentArea : placeholders.area }}</li>
            <li v-if="showTownTab" :class="{'active': tab === 4}">{{ currentTown? currentTown : placeholders.town }}</li>
          </ul>
        </div>
        <div class="address-container">
          <ul v-if="tab === 1">
              <li v-for="(item, index) in provinces"
                  :class="{'active': item.divisionName === currentProvince}"
                  @click="chooseProvince(item.divisionName)"
                  :key="index">{{ item.divisionName }}</li>
          </ul>
          <ul v-else-if="tab === 2">
            <li v-for="(item, index) in cities"
                :class="{'active': item.divisionName === currentCity}"
                @click="chooseCity(item.divisionName)"
                :key="index">{{ item.divisionName }}</li>
          </ul>
          <ul v-else-if="tab === 3">
            <li v-for="(item, index) in areas"
                :class="{'active': item.divisionName === currentArea}"
                @click="chooseArea(item.divisionName)"
                :key="index">
              {{ item.divisionName }}
            </li>
          </ul>
          <ul v-else-if="tab === 4">
            <li v-for="(item, index) in towns"
                :class="{'active': item.divisionName === currentTown}"
                @click="chooseTown(item.divisionName)"
                :key="index">
              {{ item.divisionName }}
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
//import adressData from './adressData';

const defaultCode = 11000000;
export default {
  data() {
    return {
      tab: 1,
      showCityTab: false,
      showAreaTab: false,
      showTownTab: false,
      provinces: [],
      cities: [],
      areas: [],
      towns: [],
      currentProvince: '',
      currentCity: '',
      currentArea: '',
      currentTown: '',
      placeholders: {
        province: '请选择',
        city: '请选择',
        area: '请选择',
        town: '请选择',
      },
    };
  },
  created() {
    this.getProvince();
  },
  methods: {
    getProvince() {
      let self = this;
      axios.get('http://localhost:8080/static/province.json')
        .then((res) => {
          self.provinces = res.data;
        });
    },
    getCity() {
      let self = this;
      axios.get('http://localhost:8080/static/city.json')
        .then((res) => {
          console.log(res)
          self.cities = res.data.area;
        });
    },
    getArea() {
      let self = this;
      axios.get('http://localhost:8080/static/area.json')
        .then((res) => {
          console.log(res)
          self.areas = res.data.area;
        });
    },
    getTown() {
      let self = this;
      axios.get('http://localhost:8080/static/town.json')
        .then((res) => {
          console.log(res)
          self.towns = res.data.area;
        });
    },
    resetProvince() {
      this.tab = 1;
    },
    resetCity() {
      this.tab = 2;
    },
    resetArea() {
      this.tab = 3;
    },
    resetTown() {
      this.tab = 4;
    },
    //选择省
    chooseProvince(name) {
      console.log(this.currentProvince)
      this.currentProvince = name;
      this.tab = 2;
      this.showCityTab = true;
      this.getCity();
    },
    //选择市
    chooseCity(name) {
      this.currentCity = name;
      this.tab = 3;
      this.showAreaTab = true;
      this.showTownTab = false;
      this.getArea();
    },
    //选择区/县
    chooseArea(name) {
      this.currentArea = name;
      this.tab = 4;
      this.showTownTab = true;
      this.getTown();
    },
    //选择乡镇
    chooseTown(name) {
      this.currentTown = name;
      console.log(this.currentProvince+this.currentCity+this.currentArea+this.currentTown)
    },
    
  },
};
</script>
<style>
    .address-container {
        height: 3rem;
    }
</style>



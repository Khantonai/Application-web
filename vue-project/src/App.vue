<script setup lang="ts">
import { ref, watch } from 'vue'
import RenderData from './components/RenderData.vue'
import PlaceholderMessage from './components/PlaceholderMessage.vue'

import normalizeString from './utils/normalize.ts'
import convertToStartWordRegex from './utils/regex.ts'

const rawResults = ref([])
const message = ref("Appuyez sur 'Fecth Users' pour avoir la liste des utilisateurs")
const searchBar = ref('')
const genderFilter = ref('all')
const ageOrder = ref('no')
const modifiedResults = ref([])

const displayColumns = {
  Photo: 'picture.thumbnail',
  Nom: ['name.first', 'name.last'],
  Email: 'email',
  Tel: 'phone',
  Age: 'dob.age',
  Genre: 'gender',
}

async function fetchUsers() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=20')
    const data = await response.json()
    rawResults.value = [...rawResults.value, ...data.results]

    searchUsers()

    message.value = 'Aucun résultat trouvé'
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

function searchUsers() {
  let searchFilterArray = convertToStartWordRegex(searchBar.value)

  modifiedResults.value = rawResults.value.filter((user) => {
    return searchFilterArray.every((re) => {
      const firstName = normalizeString(user.name.first)
      const lastName = normalizeString(user.name.last)
      return firstName.match(re) || lastName.match(re)
    })
  })

  if (genderFilter.value !== 'all') {
    modifiedResults.value = modifiedResults.value.filter(
      (user) => user.gender === genderFilter.value,
    )
  }

  if (ageOrder.value !== 'no') {
    modifiedResults.value = modifiedResults.value.sort((a, b) =>
      ageOrder.value === 'desc' ? a.dob.age - b.dob.age : b.dob.age - a.dob.age,
    )
  }
}

watch([searchBar, genderFilter, ageOrder], searchUsers);
</script>

<template>
  <header>
    <h1>Users list</h1>
    <div class="filter-bar">
      <button id="fetch-users" @click="fetchUsers">Fetch Users</button>
      <div>
        <label for="gender">Filtrer par genre</label>
        <select
          name="gender"
          style="width: 200px"
          class="filter"
          v-model="genderFilter"
        >
          <option value="all">Tout afficher</option>
          <option value="male">Hommes</option>
          <option value="female">Femmes</option>
        </select>
      </div>
      <div>
        <label for="age">Tri par âge</label>
        <select
          name="age"
          id="age"
          style="width: 200px"
          class="filter"
          v-model="ageOrder"
        >
          <option value="no">Pas de tri</option>
          <option value="desc">Croisssant</option>
          <option value="asc">Décroisssant</option>
        </select>
      </div>
      <div>
        <label for="search">Rechercher</label>
        <input type="text" class="filter" v-model="searchBar"/>
      </div>
    </div>
  </header>

  <main>
    <p>{{ `${modifiedResults.length} sur ${rawResults.length} utilisateurs affichés` }}</p>
    <table id="tbl-users">
      <thead>
        <tr>
          <th v-for="(value, key) in displayColumns" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <RenderData :data="modifiedResults" :displayColumns="displayColumns" />
      </tbody>
    </table>
    <PlaceholderMessage
      v-if="!modifiedResults.length"
      :msg="message"
      :type="!rawResults.length ? '' : 'error'"
    />
  </main>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 50px;
  align-items: center;
}

.filter {
  width: 200px;
}
</style>

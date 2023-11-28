<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const categories = ref([
  {
    id: 1,
    name: "Alice",
    date: "12/13/23",
    time:"12:13PM",
    office:"Cashier",

  },
  {
    id: 2,
    name: "Paul",
    date: "12/13/23",
    time:"12:13PM",
    office:"Cashier",
  }
]);

const editingCategory = ref(null);
const newCategory = ref({ date: '', time: '', office: ''}); // New category object

const editCategory = (category) => {
  editingCategory.value = { ...category.data }; // Set editingCategory to the selected category's data
};

const saveEditedCategory = () => {
  if (editingCategory.value) {
    // Update the category data with the edited values
    const index = categories.value.findIndex((c) => c.id === editingCategory.value.id);
    categories.value[index].date = editingCategory.value.date;
    categories.value[index].time = editingCategory.value.time;
    categories.value[index].office = editingCategory.value.office;
    editingCategory.value = null;
  }
};

const cancelEdit = () => {
  editingCategory.value = null;
};

const deleteCategory = (category) => {
  // Find the index of the category
  const index = categories.value.findIndex((c) => c.id === category.id);
  // Remove the category from the categories array
  categories.value.splice(index, 1);
};

const addCategory = () => {
  if (newCategory.value.name && newCategory.value.description) {
    // Generate a new unique ID (replace with your actual ID generation logic)
    const newId = Math.max(...categories.value.map((c) => c.id)) + 1;
    newCategory.value.id = newId;
    categories.value.push({ ...newCategory.value });
    // Clear the form for the next addition
    newCategory.value.date = '';
    newCategory.value.time = '';
    newCategory.value.office = '';
  }
};
</script>

<template>
  <div>
    <h1>Visitor Information</h1>
    <DataTable :value="categories" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="time" header="Time"></Column>
      <Column field="office" header="Office"></Column>
    
       </DataTable>
  </div>
</template>

<style scoped>

</style>

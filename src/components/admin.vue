<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const account = ref([
  {
    id: 1,
    incharge: "Alice",
    office: "Cashier",
  },
  
  {
    id: 2,
    incharge: "Paul",
    office: "Registrar", 
  }
]);

const editingAccount = ref(null);
const newAccount = ref({ incharge: '', office: '' }); // New category object for incharge and offfice

const editAccount = (accounts) => {
  editingAccount.value = { ...accounts.data }; // Set editingAccounts to the selected account's data
};

const saveEditedAccount = () => {
  if (editingAccount.value) {
    // Update the account data with the edited values
    const index = account.value.findIndex((c) => c.id === editingAccount.value.id);
    account.value[index].incharge = editingAccount.value.incharge;
    account.value[index].office = editingAccount.value.office;
    editingAccount.value = null;
  }
};

const cancelEdit = () => {
  editingAccount.value = null;
  editingCategory.value = null;
};

const deleteAccount = (accounts) => {
  // Find the index of the category
  const index = account.value.findIndex((c) => c.id === accounts.id);
  // Remove the category from the categories array
  account.value.splice(index, 1);
};

const addAccount = () => {
  if (newAccount.value.incharge && newAccount.value.office) {
    // Generate a new unique ID (replace with your actual ID generation logic)
    const newId = Math.max(...account.value.map((c) => c.id)) + 1;
    newAccount.value.id = newId;
    account.value.push({ ...newAccount.value });
    // Clear the form for the next addition
    newAccount.value.incharge = '';
    newAccount.value.office = '';
  }
};

const categories = ref([
  {
    id: 1,
    name: "Alice",
    date: "12/13/23",
    time:"12:13PM",

  },
  {
    id: 2,
    name: "Paul",
    date: "12/13/23",
    time:"12:13PM",
  }
]);

const editingCategory = ref(null);
const newCategory = ref({ name: '', date: '',time:'' }); // New category object

const editCategory = (category) => {
  editingCategory.value = { ...category.data }; // Set editingCategory to the selected category's data
};

const saveEditedCategory = () => {
  if (editingCategory.value) {
    // Update the category data with the edited values
    const index = categories.value.findIndex((c) => c.id === editingCategory.value.id);
    categories.value[index].name = editingCategory.value.name;
    categories.value[index].date = editingCategory.value.date;
    categories.value[index].time = editingCategory.value.time;
    editingCategory.value = null;
  }
};

const deleteCategory = (category) => {
  // Find the index of the category
  const index = categories.value.findIndex((c) => c.id === category.id);
  // Remove the category from the categories array
  categories.value.splice(index, 1);
};

const addCategory = () => {
  if (newCategory.value.name && newCategory.value.time) {
    // Generate a new unique ID (replace with your actual ID generation logic)
    const newId = Math.max(...categories.value.map((c) => c.id)) + 1;
    newCategory.value.id = newId;
    categories.value.push({ ...newCategory.value });
    // Clear the form for the next addition
    newCategory.value.name = '';
    newCategory.value.date = '';
    newCategory.value.time = '';
  }
};
</script>

<template>
  <body>
  <!-- Account Information -->
  <div>
    <h1>Account Information</h1>
    <DataTable :value="account" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="incharge" header="In-charge"></Column>
      <Column field="office" header="Office"></Column>
      
      <Column header="Actions">
        <template #body="rowData">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-info" @click="editAccount(rowData)" />
          <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="deleteAccount(rowData)" />
         
        </template>
      </Column>
    </DataTable>

    <!-- Editing Account -->
    <div v-if="editingAccount">
      <h2>Edit Account</h2>
      <form @submit="saveEditedAccount">
        <div>
          <label for="editedIncharge">In-charge:</label>
          <InputText id="editedIncharge" v-model="editingAccount.incharge" />
        </div>
        <div>
          <label for="editedOffice">Office:</label>
          <InputText id="editedOffice" v-model="editingAccount.office" />
        </div>
        <div>
          <Button label="Save" icon="pi pi-check" class="p-button-success" type="submit" />
          <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="cancelEdit" />
        </div>
      </form>
    </div>

    <!-- Add Account Form -->
    <div>
      <h2>Add Account</h2>
      <form @submit.prevent="addAccount">
        <div>
          <label for="newIncharge">In-charge:</label>
          <InputText id="newIncharge" v-model="newAccount.incharge" />
        </div>
        <div>
          <label for="newOffice">Office:</label>
          <InputText id="newOffice" v-model="newAccount.office" />
        </div>
        <div>
          <Button label="Add" icon="pi pi-plus" class="p-button-primary" type="submit" />
        </div>
      </form>
    </div>
  </div>
  <!-- Visitor Information -->
  <div>
    <h1>Visitor Information</h1>
    <DataTable :value="categories" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="time" header="Time"></Column>
      <Column header="Actions">
        <template #body="rowData">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-info" @click="editCategory(rowData)" />
          <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="deleteCategory(rowData)" />
          <Button label="Confirm" icon="pi pi-pencil" class="p-button-info" @click="editCategory(rowData)" />
          <Button label="Decline" icon="pi pi-pencil" class="p-button-info" @click="editCategory(rowData)" />
        </template>
      </Column>
    </DataTable>

    <div v-if="editingCategory">
      <h2>Edit Category</h2>
      <form @submit="saveEditedCategory">
        <div>
          <label for="editedName">Name:</label>
          <InputText id="editedName" v-model="editingCategory.name" />
        </div>
        <div>
          <label for="editedDate">Date:</label>
          <InputText id="editedDate" v-model="editingCategory.date" />
        </div>
        <div>
          <label for="editedTime">Time:</label>
          <InputText id="editedTime" v-model="editingCategory.time" />
        </div>
        <div>
          <Button label="Save" icon="pi pi-check" class="p-button-success" type="submit" />
          <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="cancelEdit" />
        </div>
      </form>
    </div>

    <!-- Add Visitor Form -->
    <div>
      <h2>Add Visitor</h2>
      <form @submit.prevent="addCategory">
        <div>
          <label for="newName">Name:</label>
          <InputText id="newName" v-model="newCategory.name" />
        </div>
        <div>
          <label for="newDate">Date:</label>
          <InputText id="newDate" v-model="newCategory.date" />
        </div>
        <div>
          <label for="newTime">Time:</label>
          <InputText id="newTime" v-model="newCategory.time" />
        </div>
        <div>
          <Button label="Add" icon="pi pi-plus" class="p-button-primary" type="submit" />
        </div>
      </form>
    </div>
  </div>
</body>
</template>

<style scoped>
body {
background-image: url('/src/assets/bg.png');
position: absolute;
width: 1920px;
height: 1080px;
left: 0px;
top: 0px;
}
</style>

<script>
import {Food_Item} from "../model/food-item.entity.js";
export default {
  name: "food-item-3table",
  props: {
    article: {
      type: Food_Item,
      required: true
    }
  }
}
</script>

<template>
  <SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
  <TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
    <template #header>
      <div class="text-right">
        <IconField iconPosition="left">
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText v-model="filters['global']" placeholder="Global Search" />
        </IconField>
      </div>
    </template>
    <Column field="name" header="Name" expander>
      <template #filter>
        <InputText v-model="filters['name']" type="text" class="p-column-filter" placeholder="Filter by name" />
      </template>
    </Column>
    <Column field="size" header="Size">
      <template #filter>
        <InputText v-model="filters['size']" type="text" class="p-column-filter" placeholder="Filter by size" />
      </template>
    </Column>
    <Column field="type" header="Type">
      <template #filter>
        <InputText v-model="filters['type']" type="text" class="p-column-filter" placeholder="Filter by type" />
      </template>
    </Column>
  </TreeTable>

</template>

<style scoped>

</style>
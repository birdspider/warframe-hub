<template>
  <b-col md="4" class="panel-header" data-packer-item="true">
    <h4 class="mt-2 text-center header-panel">{{ title }}</h4>
    <slot></slot>
  </b-col>
</template>

<script>
export default {
  name: 'HubPanelWrap',
  props: ['title'],
  data() {
    return {};
  },
  components: {},
};
</script>

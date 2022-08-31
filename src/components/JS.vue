<template>
<button class="p-2 bg-blue" @click="getThirdMaximunNumber">获取第三大数值</button>
<p>原始数值：{{ rawList.toString() }}</p>
<p>第三大数值：{{ thirdMaxNumber }}</p>
</template>

<script setup>
import { ref, reactive } from 'vue'
const rawList = reactive([78, 23, 79, 122, 68, 43, 55]);
const thirdMaxNumber = ref();
function getThirdMaximunNumber() {
  if(rawList.length<3) return thirdMaxNumber.value = max(new Set(rawList))
  return thirdMaxNumber.value = rawList.sort()[-3]
}

function max(numList) {
  if(numList?.length < 1) return
  let maxNum = numList[0];
  for(let i=0; i < numList.length; i++) {
    if (maxNum < numList[i]) {
      maxNum = numList[i]
    }
  }
  return maxNum
}

</script>

<style>

</style>
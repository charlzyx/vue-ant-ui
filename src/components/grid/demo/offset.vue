<template lang="html">
  <div>
    <ant-row>
      <ant-col :span="8">.ant-col-8</ant-col>
      <ant-col :span="8" :offset="8">.ant-col-8</ant-col>
    </ant-row>
    <ant-row>
      <ant-col :span="6" :offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
      <ant-col :span="6" :offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
    </ant-row>
    <ant-row>
      <ant-col :span="12" :offset="6">.ant-col-12 .ant-col-offset-6</ant-col>
    </ant-row>
  </div>
</template>

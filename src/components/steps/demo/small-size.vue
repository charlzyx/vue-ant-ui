
<template>
  <ant-steps :current="1" size="small">
    <ant-step>
      <template slot="title">已完成</template>
    </ant-step>
    <ant-step>
      <template slot="title">进行中</template>
    </ant-step>
    <ant-step>
      <template slot="title">待运行</template>
    </ant-step>
    <ant-step>
      <template slot="title">待运行</template>
    </ant-step>
  </ant-steps>
</template>
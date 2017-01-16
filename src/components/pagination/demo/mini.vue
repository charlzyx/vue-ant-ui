
<template>
  <div>
    <ant-pagination size="small" :default-current="2" :page-size="10" :total="100"></ant-pagination>
    <ant-pagination size="small" :default-current="2" :page-size="10" :total="100" showQuickJumper></ant-pagination>
    <ant-pagination size="small" :total="100">
      <span slot="showTotal">Total 100 items</span>
    </ant-pagination>
  </div>
</template>
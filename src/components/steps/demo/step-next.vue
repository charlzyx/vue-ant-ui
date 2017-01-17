
<template>
  <div>
    <ant-steps :current="currentStep">
      <ant-step v-for="step in steps">
        <span slot="title">{{step.title}}</span>
      </ant-step>
    </ant-steps>
    <div class="steps-content">{{currentStepContent}}</div>
    <div class="steps-action">
      <ant-button type="primary" @click.native="moveStep(1)">{{btnTxt}}</ant-button>
      <ant-button type="ghost" @click.native="moveStep(-1)" v-if="currentStep !== 0">上一步</ant-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentStep: 1,
    steps: [
      {title: '床前', content: '明月光'},
      {title: '疑?', content: '是地上霜'},
      {title: '举头?', content: '望明月'},
      {title: '低头..', content: '思故乡'}
    ]
  }),
  methods: {
    moveStep (step) {
      const { currentStep, steps } = this
      const nextStep = currentStep + step
      if (nextStep > steps.length - 1 || nextStep < 0 ) return
      this.currentStep = nextStep
    }
  },
  computed: {
    currentStepContent () {
      const { currentStep, steps } = this
      return steps[currentStep].content
    },
    btnTxt () {
      const { currentStep, steps } = this
      return this.currentStep === steps.length - 1 ? '完成' : '下一步'
    }
  }
}
</script>
<style>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
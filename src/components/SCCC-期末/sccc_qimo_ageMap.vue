<template></template>

<script>
export default {
  data() {
    return {
      studentMap: new Map()
    };
  },
  mounted() {
    this.initStudentMap();
    this.checkAgeAndOutput();
  },
  methods: {
    initStudentMap() {
      this.studentMap.set(2023001, { name: "张三", age: 19, major: "计应", score: "优秀" });
    },
    checkAgeAndOutput() {
      this.studentMap.forEach((student, id) => {
        console.log(`学号：${id}`);
        console.log(`专业：${student.major}`);
        console.log(`姓名：${student.name}`);
        console.log(`成绩：${student.score}`);
      });
    }
  }
};
</script>

<style scoped></style>
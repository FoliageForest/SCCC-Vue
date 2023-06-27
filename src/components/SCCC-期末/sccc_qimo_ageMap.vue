<template>
  <div>

  </div>
</template>
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
      this.studentMap.set(1, { name: "张三", age: 18, major: "计算机科学", score: "优秀" });
      this.studentMap.set(2, { name: "李四", age: 20, major: "数学", score: "良好" });
      this.studentMap.set(3, { name: "王五", age: 19, major: "物理", score: "及格" });
    },
    checkAgeAndOutput() {
      let ageToCheck = 19;

      this.studentMap.forEach((student, id) => {
        if (student.age == ageToCheck) {
          console.log(`学号：${id}`);
          console.log(`姓名：${student.name}`);
          console.log(`专业：${student.major}`);
          console.log(`成绩：${student.score}`);
        }
      });
    }
  }
};
</script>
function hello() {
  console.log(this);
};

const helloArrow = () => {
  console.log(this);
};
hello();
helloArrow();
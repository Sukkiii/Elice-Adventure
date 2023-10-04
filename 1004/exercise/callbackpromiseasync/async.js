(async () => {
  const name = await getName();
  const age = await getAge();
  const address = await getAddress();

  console.log(name, age, address)
})();
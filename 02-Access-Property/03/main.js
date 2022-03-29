const product1 = {
  name: "Water",
  distributor: {
    name: "Giraffe Water Company",
    address: {
      street: "Phetchaburi",
      subdistrict: "Thanonphetchaburi",
      district: "Ratchathewi",
      province: "Bangkok",
    },
  },
};

const product2 = {};

function logAddress(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }

  if (count === 0) {
    return;
  } else {
    console.log(obj.distributor.address.province);
  }
}

logAddress(product1);
logAddress(product2);
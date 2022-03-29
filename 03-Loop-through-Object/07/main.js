const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

function checkName(name) {
    if (employees[name]) {
        return "Name: john, salary: 1000, address: Ratchathewi, Bangkok";
    } else {
        return "Not found";
    }
}

console.log(checkName("mike"));
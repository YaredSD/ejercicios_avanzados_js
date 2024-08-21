const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(list, param1, param2) {
    const change = list[param1];
    list[param1] = list[param2];
    list[param2] = change;
  return list;
  }
  
  console.log(swap(fantasticFour, 1, 2));
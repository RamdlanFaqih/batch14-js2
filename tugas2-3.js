function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
      return;
    }
  
    if (dataArray.length <= 5) {
      console.log("Jumlah data dalam dataArray harus lebih dari 5");
      return;
    }
  
    const filteredData = dataArray.filter(value => value > nilaiAwal && value < nilaiAkhir);
    filteredData.sort((a, b) => a - b);
    console.log(filteredData);
  }
  
  seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
  seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
  seleksiNilai(5, 17 , [2, 25, 4])
  seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);
  
// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const fs = require('fs');

const getSecondWord = (words) => {

  const word = words.split(' ');
  return word[1];

}

const readJsonData = (dataJson) => {
  const data = JSON.parse(dataJson)
  let word = ''

  // case object
  if (data?.message !== undefined) {
    word = data?.message
  }

  // case array
  if (data?.length) {
    data?.forEach(item => {
      
      if (item?.message !== undefined) {
        word = item?.message
      }

      if (item?.data?.message !== undefined) {
        word = item?.data?.message
      }
    })
  }

  return getSecondWord(word)
}


const bacaData = (fnCallback) => {

  const hasilAkhir = [];

  fs.readFile(file1, 'utf-8', (err, data) => {
    if (err) {
      return console.log('Ada terjadi error: ' + err);
    }

    hasilAkhir.push(readJsonData(data));

    fs.readFile(file2, 'utf-8', (err, data) => {
      if (err) {
        return console.log('Ada terjadi error: ' + err);
      }
      hasilAkhir.push(readJsonData(data));

      //Membaca file ke 3
      fs.readFile(file3, 'utf-8', (err, data) => {
        if (err) {
          return console.log('Ada terjadi error: ' + err);
        }
        hasilAkhir.push(readJsonData(data));

        return fnCallback(err, hasilAkhir);
      })
    })
  })
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

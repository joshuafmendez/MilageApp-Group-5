// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// let docDefinition = {
//   content: [
//     "Car Expenses",
//     {
//       layout: "lightHorizontalLines", // optional
//       table: {
//         // headers are automatically repeated if the table spans over multiple pages
//         // you can declare how many rows should be treated as headers
//         headerRows: 1,
//         widths: ["*", "auto", 100, "*"],

//         body: [
//           ["First", "Second", "Third", "The last one"],
//           ["Value 1", "Value 2", "Value 3", "Value 4"],
//           [{ text: "Bold value", bold: true }, "Val 2", "Val 3", "Val 4"],
//         ],
//       },
//     },
//   ],
// };

// pdfMake.createPdf(docDefinition).open();

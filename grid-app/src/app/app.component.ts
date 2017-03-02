import { Component } from '@angular/core';
import * as _ from 'lodash';
import {MockServiceService} from "./mock-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MockServiceService]
})
export class AppComponent {
  title = 'app works!';

  // gridColumns: any[] = [
  //   {title: 'ID', name: 'id'},
  //   {title: 'First name', name: 'first_name'},
  //   {title: 'Sur name', name: 'last_name'},
  //   {title: 'E-mail', name: 'email'},
  //   {title: 'Gender', name: 'gender'},
  //   {title: 'IP ADDRESS', name: 'ip_address'},
  //   {title: 'ID Bil', name: 'idbil'}
  // ];

  // gridColumns: any[] = [
  //   {title: 'Bolag', name: 'Kund'},
  //   {title: 'Reg NR', name: 'Regnr'},
  //   {title: 'Märke', name: 'Marke'},
  //   {title: 'Modell', name: 'Modell'},
  //   {title: 'ID BIL', name: 'IDBil'},
  //   {title: 'Förare', name: 'Forare'},
  //   {title: 'Anställningsnummer', name: 'Anställningsnummer'},
  //   {title: 'Kostnadsställe', name: 'Kostnadsstalle'},
  //   {title: 'Liter', name: 'Liter'},
  //   {title: 'Drivmedel', name: 'Drivmedel'},
  //   {title: 'Service', name: 'Service'},
  //   {title: 'Reparation', name: 'Reparation'},
  //   {title: 'Däck', name: 'Dack'},
  //   {title: 'Tillbehör', name: 'Tillbehor'},
  //   {title: 'Hyrbil', name: 'Hyrbil'},
  //   {title: 'Tvätt', name: 'Tvatt'},
  //   {title: 'Parkering', name: 'Parkering'},
  //   {title: 'Övrigt', name: 'Ovrigt'},
  //   {title: 'Självrisk', name: 'Sjalvrisk'},
  //   {title: 'Försäkring', name: 'Forsakring'},
  //   {title: 'Fordonsskatt', name: 'Fordonsskatt'},
  //   {title: 'Trängselskatt', name: 'Trangselskatt'},
  //   {title: 'Leasing', name: 'Leasing'},
  //   {title: 'Hanteringsavgifter', name: 'Hanteringsavgifter'},
  //   {title: 'Förändring Preliminärdebtering', name: 'ForandringPreliminardebtering'},
  //   {title: 'Totala Kostnader', name: 'TotalaKostnader'},
  //   {title: 'Avdragsgill Moms', name: 'AvdragsgillMoms'},
  //   {title: 'KG', name: 'Kg'},
  //   {title: 'KG Gas', name: 'KgGas'},
  //   {title: 'Periodmil', name: 'Periodmil'},
  //   {title: 'Säkerhet', name: 'Sakerhet'}
  // ];

  gridColumns: any[] = [{"fkStandardReportId":4,"fkColumnId":57,"type":"string","title":"Bolag","visible":true,"choosable":true,"width":0,"template":"","chart":false,"filter":"contains","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":1,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":57,"field":"Kund"},{"fkStandardReportId":4,"fkColumnId":58,"type":"string","title":"Regnr","visible":true,"choosable":true,"width":65,"template":"showCarCost","chart":false,"filter":"contains","aggregate":"count","defaultChart":false,"setAsCategory":true,"sortOrder":2,"tooltip":"Registreringsnummer","pieChart":false,"fkStandardReportId1":4,"columnId":58,"field":"Regnr"},{"fkStandardReportId":4,"fkColumnId":59,"type":"string","title":"Märke","visible":false,"choosable":true,"width":0,"template":"","chart":false,"filter":"contains","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":3,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":59,"field":"Marke"},{"fkStandardReportId":4,"fkColumnId":60,"type":"string","title":"Modell","visible":false,"choosable":true,"width":0,"template":"","chart":false,"filter":"contains","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":4,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":60,"field":"Modell"},{"fkStandardReportId":4,"fkColumnId":61,"type":"string","title":"Förare","visible":false,"choosable":true,"width":0,"template":"driverInfo","chart":false,"filter":"contains","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":5,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":61,"field":"Forare"},{"fkStandardReportId":4,"fkColumnId":197,"type":"string","title":"Anställningsnummer","visible":false,"choosable":true,"width":0,"template":"","chart":false,"filter":"contains","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":5,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":197,"field":"Anställningsnummer"},{"fkStandardReportId":4,"fkColumnId":63,"type":"string","title":"Kostnadsställe","visible":false,"choosable":true,"width":0,"template":"","chart":false,"filter":"eq","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":7,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":63,"field":"Kostnadsstalle"},{"fkStandardReportId":4,"fkColumnId":64,"type":"number","title":"Liter","visible":false,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":8,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":64,"field":"Liter"},{"fkStandardReportId":4,"fkColumnId":65,"type":"number","title":"Drivmedel","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":9,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":65,"field":"Drivmedel"},{"fkStandardReportId":4,"fkColumnId":66,"type":"number","title":"Service","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":10,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":66,"field":"Service"},{"fkStandardReportId":4,"fkColumnId":67,"type":"number","title":"Reparation","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":11,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":67,"field":"Reparation"},{"fkStandardReportId":4,"fkColumnId":68,"type":"number","title":"Däck","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":12,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":68,"field":"Dack"},{"fkStandardReportId":4,"fkColumnId":69,"type":"number","title":"Tillbehör","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":13,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":69,"field":"Tillbehor"},{"fkStandardReportId":4,"fkColumnId":70,"type":"number","title":"Hyrbil","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":14,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":70,"field":"Hyrbil"},{"fkStandardReportId":4,"fkColumnId":71,"type":"number","title":"Tvätt","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":15,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":71,"field":"Tvatt"},{"fkStandardReportId":4,"fkColumnId":72,"type":"number","title":"Parkering","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":16,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":72,"field":"Parkering"},{"fkStandardReportId":4,"fkColumnId":73,"type":"number","title":"Övrigt","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":17,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":73,"field":"Ovrigt"},{"fkStandardReportId":4,"fkColumnId":74,"type":"number","title":"Självrisk","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":18,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":74,"field":"Sjalvrisk"},{"fkStandardReportId":4,"fkColumnId":83,"type":"number","title":"KgGas","visible":false,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":18,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":83,"field":"KgGas"},{"fkStandardReportId":4,"fkColumnId":153,"type":"number","title":"Ack. tjänstemil","visible":false,"choosable":true,"width":0,"template":"journal","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":18,"tooltip":"Ackumulerade tjänstemil period","pieChart":false,"fkStandardReportId1":4,"columnId":153,"field":"PeriodTjanstemil"},{"fkStandardReportId":4,"fkColumnId":154,"type":"number","title":"Periodmil","visible":false,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":18,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":154,"field":"Periodmil"},{"fkStandardReportId":4,"fkColumnId":155,"type":"number","title":"Mil rapporterade fram till","visible":false,"choosable":true,"width":0,"template":"journal","chart":false,"filter":"eq","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":18,"tooltip":"Mil rapporterade fram till","pieChart":false,"fkStandardReportId1":4,"columnId":155,"field":"UtgendeDatum2"},{"fkStandardReportId":4,"fkColumnId":168,"type":"number","title":"Förändring preliminärdebitering","visible":false,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":18,"tooltip":"Förändring preliminärdebitering","pieChart":false,"fkStandardReportId1":4,"columnId":168,"field":"ForandringPreliminardebtering"},{"fkStandardReportId":4,"fkColumnId":75,"type":"number","title":"Försäkring","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":19,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":75,"field":"Forsakring"},{"fkStandardReportId":4,"fkColumnId":76,"type":"number","title":"Fordonsskatt","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":20,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":76,"field":"Fordonsskatt"},{"fkStandardReportId":4,"fkColumnId":77,"type":"number","title":"Trängselskatt","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":21,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":77,"field":"Trangselskatt"},{"fkStandardReportId":4,"fkColumnId":78,"type":"number","title":"Leasing","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":22,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":78,"field":"Leasing"},{"fkStandardReportId":4,"fkColumnId":79,"type":"number","title":"Hanteringsavgifter","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":23,"tooltip":null,"pieChart":true,"fkStandardReportId1":4,"columnId":79,"field":"Hanteringsavgifter"},{"fkStandardReportId":4,"fkColumnId":80,"type":"number","title":"Summa kostnad","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":true,"setAsCategory":false,"sortOrder":24,"tooltip":"Summa kostnad inkl ej avdragsgill moms","pieChart":false,"fkStandardReportId1":4,"columnId":80,"field":"TotalaKostnader"},{"fkStandardReportId":4,"fkColumnId":81,"type":"number","title":"Avdragsgill moms","visible":true,"choosable":true,"width":0,"template":"invoiceLines","chart":true,"filter":"eq","aggregate":"sum","defaultChart":false,"setAsCategory":false,"sortOrder":25,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":81,"field":"AvdragsgillMoms"},{"fkStandardReportId":4,"fkColumnId":194,"type":"number","title":"IDBil","visible":false,"choosable":false,"width":0,"template":"","chart":false,"filter":"eq","aggregate":"max","defaultChart":false,"setAsCategory":false,"sortOrder":100,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":194,"field":"IDBil"},{"fkStandardReportId":4,"fkColumnId":199,"type":"number","title":"Säkerhet","visible":false,"choosable":true,"width":0,"template":"","chart":true,"filter":"eq","aggregate":"average","defaultChart":false,"setAsCategory":false,"sortOrder":1901,"tooltip":null,"pieChart":false,"fkStandardReportId1":4,"columnId":199,"field":"Sakerhet"}];

  gridData: any[] = this.mockService.getData();

  gridFooter = {};

  constructor(private mockService: MockServiceService) {
    // Add tooltips
    _.forEach(this.gridColumns, (c: any) => {
      switch (c.aggregate) {
        case 'sum':
          c.tooltip = 'SUM';
          break;
        case 'max':
          c.tooltip = 'MAX';
          break;
        case 'average':
          c.tooltip = 'AVERAGE';
          break;
        default:
          c.tooltip = undefined;
          break;
      }
    });
    this.gridColumns = _.filter(this.gridColumns, {visible: true, choosable: true});
    this.calcFooter();
  }

  addRow(): void {
    for (let i = 0, len = 30; i < len; i++) {
      this.gridData.push(this.gridData[Math.floor(Math.random() * this.gridData.length) + 1]);
    }
  }

  calcFooter(): void {
    const footerValues = {};
    _.forEach(this.gridData, (data: any) => {
      _.forEach(data, (d: any, key: any) => {
        const column = _.find(this.gridColumns, {field: key});
        if (column) {
          console.log(column);
          switch (column.aggregate) {
            case 'sum':
              footerValues[key] = _.add(footerValues[key], d);
              break;
            case 'max':
              footerValues[key] = '0.0';
              break;
            case 'average':
              footerValues[key] = '000.0';
              break;
            default:
              footerValues[key] = '00.0';
              break;
          }
        }
        return;
      });
    });
    this.gridFooter = footerValues;
    console.log(footerValues, this.gridFooter);
  }

  getTdText(columnHeader: any): string {
    console.log(columnHeader);
    return 'Hej';
    //columnHeader
  }
}

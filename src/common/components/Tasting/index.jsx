import React from "react";
//import ReactHighcharts from 'react-highcharts';

global.Highcharts = require('highcharts');
import HighchartsMore from 'highcharts-more';
HighchartsMore(global.Highcharts);
import ReactHighcharts from 'react-highcharts';

export default class Tasting extends React.Component {
  render() {
    const config = {
        chart: {
            polar: true,
            type: 'line',
        },

        title: {
            text: this.props.Name+"'s notes",
            align: 'center'
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: [
              'Fruit/Ester',
              'Alcohol',
              'Citrus',
              'Herbal',
              'Floral',
              'Spicy',
              'Bready',
              'Toffee',
              'Roasted',
              'Sweet',
              'Sour',
              'Bitter',
              'Sharp',
              'Body',
              'Linger',
            ],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 10
        },

        tooltip: {
            enabled: false,
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            enabled: false,
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            showInLegend: false,
            name: '',
            data: this.props.Notes,
            pointPlacement: 'on',
            states: {
                hover: {
                    enabled: false
                }
            }
        }]
    };
    return (
      <ReactHighcharts config = {config}></ReactHighcharts>
    );
  }
}

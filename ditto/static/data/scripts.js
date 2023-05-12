window.Apex = {
	chart: {
	  foreColor: '#ccc',
	  toolbar: {
		show: false
	  },
	},
	stroke: {
	  width: 3
	},
	dataLabels: {
	  enabled: false
	},
	tooltip: {
	  theme: 'dark'
	},
	grid: {
	  borderColor: "#535A6C",
	  xaxis: {
		lines: {
		  show: true
		}
	  }
	}
  };
  
  var spark3 = {
	chart: {
	  id: 'spark3',
	  group: 'sparks',
	  type: 'line',
	  width: 285,
	  height: 80,
	  sparkline: {
		enabled: true
	  },
	  dropShadow: {
		enabled: true,
		top: 1,
		left: 1,
		blur: 2,
		opacity: 0.2,
	  }
	},
	series: [{
	  data: [47, 45, 74, 32, 56, 31, 44]
	}],
	stroke: {
	  curve: 'smooth'
	},
	markers: {
	  size: 0
	},
	grid: {
	  padding: {
		top: 20,
		bottom: 10,
		left: 180,
		right:0,
	  }
	},
	colors: ['#fff'],
	xaxis: {
	  crosshairs: {
		width: 1
	  },
	},
	tooltip: {
	  x: {
		show: false
	  },
	  y: {
		title: {
		  formatter: function formatter(val) {
			return '';
		  }
		}
	  }
	}
  }
  
  new ApexCharts(document.querySelector("#spark3"), spark3).render();
  
  var optionsLine = {
	chart: {
	  height: 328,
	  type: 'line',
	  zoom: {
		enabled: false
	  },
	  dropShadow: {
		enabled: true,
		top: 3,
		left: 2,
		blur: 4,
		opacity: 1,
	  }
	},
	stroke: {
	  curve: 'smooth',
	  width: 2
	},
	//colors: ["#3F51B5", '#2196F3'],
	series: [
	  {
		data: [3, 33, 21, 42, 19, 32],
		color: '#00e396'
	  },
	],
	title: {
	  text: '시간별 사람수',
	  align: 'left',
	  offsetY: 25,
	  offsetX: 20,
	},
	markers: {
	  size: 6,
	  strokeWidth: 0,
	  hover: {
		size: 9
	  }
	},
	grid: {
	  show: true,
	  padding: {
		bottom: 0
	  }
	},
	labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
	xaxis: {
	  tooltip: {
		enabled: false
	  }
	},
	legend: {
	  position: 'top',
	  horizontalAlign: 'right',
	  offsetY: -20
	}
  }
  
  var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
  chartLine.render();
  
  var optionsCircle4 = {
	chart: {
	  type: 'radialBar',
	  height: 350,
	  width: 380,
	},
	plotOptions: {
	  radialBar: {
		size: undefined,
		inverseOrder: true,
		hollow: {
		  margin: 5,
		  size: '48%',
		  background: 'transparent',
  
		},
		track: {
		  show: false,
		},
		startAngle: -180,
		endAngle: 180
  
	  },
	},
	stroke: {
	  lineCap: 'round'
	},
	title: {
		text: '일별 사람수',
		align: 'left',
		offsetY: 25,
		offsetX: 20,
	  },
	series: [71, 63, 77],
	labels: ['1일전', '2일전', '오늘'],
	legend: {
	  show: true,
	  floating: true,
	  position: 'right',
	  offsetX: 5,
	  offsetY: 220
	},
  }
  
  var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
  chartCircle4.render();
  
  var chartArea = new ApexCharts(
	document.querySelector("#areachart"),
	optionsArea
  );
  
  chartArea.render();
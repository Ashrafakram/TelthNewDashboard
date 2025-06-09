// Patient

$(function () {

  'use strict';
	
	
		var options = {
          series: [{
          name: 'OPD',
          data: [76, 85, 101, 98, 87, 105, 91]
        }, {
          name: 'Admitted',
          data: [44, 55, 57, 56, 61, 58, 63]
        }],
          chart: {
          type: 'bar',
		  foreColor:"#bac0c7",
          height: 260,
		  stacked: true,
		  toolbar: {
			show: false,
		  }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
          },
        },
        dataLabels: {
          enabled: false,
        },
		grid: {
			show: true,			
		},
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
		colors: ['#5156be', '#ffa800'],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
			
        },
        yaxis: {
          
        },
		 legend: {
      		show: true,
			position: 'top',
		 },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          },
			marker: {
			  show: false,
		  },
        }
        };

        var chart = new ApexCharts(document.querySelector("#patient_statistics"), options);
        chart.render();
	
	
		
		
	
		var options = {
          series: [
          {
            name: "Heart",
			data: [12, 22, 14, 18, 22 , 13, 17]
          },
          {
            name: "Fracture",            
            data: [28, 39, 23, 36, 45, 32, 43]
          },
          {
            name: "Cold",            
            data: [17, 12, 28, 12, 33, 26, 23]
          }
        ],
          chart: {
          height: 260,
          type: 'line',
		  foreColor:"#bac0c7",
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#5156be', '#da123b', '#ffa800'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          borderColor: '#e7e7e7',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        legend: {
      		show: true,
			position: 'top',
        }
        };

        var chart = new ApexCharts(document.querySelector("#recovery_statistics"), options);
        chart.render();
	
	
	
		 var options = {
          series: [{
          name: 'Total Patient',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
          name: 'Discharge Patient',
          type: 'line',
          data: [223, 242, 235, 327, 143, 322, 117, 131, 422, 222, 112, 116]
        }],
          chart: {
          height: 350,
          type: 'line',
		  toolbar: {
			show: false,
		  }
        },
        stroke: {
          width: [0, 4],
		  curve: 'smooth'
        },
		colors: ['#E7E4FF', '#5156be'],
        dataLabels: {
          enabled: false,
        },
        labels: ['01 Jan 2021', '02 Jan 2021', '03 Jan 2021', '04 Jan 2021', '05 Jan 2021', '06 Jan 2021', '07 Jan 2021', '08 Jan 2021', '09 Jan 2021', '10 Jan 2021', '11 Jan 2021', '12 Jan 2021'],
        xaxis: {
          type: 'datetime'
        },
        legend: {
      		show: true,
			position: 'top',
        }
        };

        var chart = new ApexCharts(document.querySelector("#total_patient"), options);
        chart.render();
	
		$('.inner-user-div3').slimScroll({
			height: '310px'
		});
	
		$('.inner-user-div4').slimScroll({
			height: '127px'
	    });
	
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 0,
			responsiveClass: true,
			autoplay: true,
			dots: false,
			nav: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  600: {
				items: 1,
			  },
			  1000: {
				items: 1,
			  }
			}
		  });
	
}); 


// Revenue


$(function () {

  'use strict';
  
  
    var options = {
          series: [
          {
            name: "This week",
            data: [28, 29, 33, 36, 32, 32, 33, 25, 30, 40, 32, 36]
          },
          {
            name: "This month",
            data: [22, 20, 25, 40, 36, 28, 40, 32, 30, 25, 40, 25]
          }
        ],
          chart: {
          height: 250,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#02A9D6'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: '.',
          offsetY: -25,
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov' , 'Dec'],
          title: {
            text: '',
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },       
        },
        legend: {
          position: 'top',
          horizontalAlign: 'center',
          floating: false,
          offsetY: -25,
          offsetX: -5
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart-1"), options);
        chart.render();

  
  $('.chat-box-one2').slimScroll({
      height: '215px'
      });

  $(document).slimScroll(function(){

    if ($(window).width() < 2500) {   
      location.slimScroll();
      $('.chat-box-one2').slimScroll({
      height: '500px'
      });  // refresh page 
    }
    else {  
      // width more than 768px for PC  
    }

});


  var options = {
          series: [
          {
            name: "This week",
      data: [28, 15, 30, 18, 35 , 13, 43]
          },
          {
            name: "This month",            
            data: [10, 39, 20, 36, 15, 32, 17]
          }
        ],
          chart: {
          height: 200,
          type: 'line',
          toolbar: {
            show: false
          }
        },
        colors: ['#ee3158', '#1dbfc1'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          show: true,  
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set', 'Sun'],
        },
        legend: {
          show: false,
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          }        
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          }        
        },
        };

        var chart = new ApexCharts(document.querySelector("#hospital-revenue"), options);
        chart.render();
  
  
});

// Order & Profit

//[custom Javascript]



// Fullscreen
$(function () {
	'use strict'
	
	var options = {
          series: [{
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43]
        }, {
          name: 'PRODUCT B',
          data: [-44, -55, -41, -67, -22, -43]
        }],
          chart: {
		  foreColor:"#bac0c7",
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],		
		grid: {
			show: true,
			borderColor: '#f7f7f7',      
		},
		colors:['#3246D3', '#ee3158'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '10%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
 
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
          ],
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1
        }
        };

        var chart = new ApexCharts(document.querySelector("#charts_widget_1_chart"), options);
        chart.render();
	
	
	var options = {
        series: [{
            name: "Profit",
            data: [0, 40, 110, 70, 100, 60, 130, 55, 140, 125]
        }],
        chart: {
			foreColor:"#bac0c7",
          height: 350,
          type: 'area',
          zoom: {
            enabled: false
          }
        },
		colors:['#ea9715'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          	show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 2,
			dashArray: 0, 
        },		
		markers: {
			size: 2,
			colors: '#ea9715',
			strokeColors: '#ffffff',
			strokeWidth: 2,
			strokeOpacity: 0.9,
			strokeDashArray: 0,
			fillOpacity: 1,
			discrete: [],
			shape: "circle",
			radius: 5,
			offsetX: 0,
			offsetY: 0,
			onClick: undefined,
			onDblClick: undefined,
			hover: {
			  size: undefined,
			  sizeOffset: 3
			}
		},	
        grid: {
			borderColor: '#f7f7f7', 
          row: {
            colors: ['transparent'], // takes an array which will be repeated on columns
            opacity: 0
          },			
		  yaxis: {
			lines: {
			  show: true,
			},
		  },
        },
		fill: {
			type: "gradient",
			gradient: {
			  shadeIntensity: 1,
			  opacityFrom: 0.01,
			  opacityTo: 1,
			  stops: [0, 90, 100]
			}
		  },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		  labels: {
			show: true,        
          },
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true
          },
          tooltip: {
            enabled: true,        
          },
        },
        yaxis: {
          labels: {
            show: true,
            formatter: function (val) {
              return val + "K";
            }
          }
        
        },
      };
      var chart = new ApexCharts(document.querySelector("#charts_widget_2_chart"), options);
      chart.render();
	
	
	// Composite line charts, the second using values supplied via javascript
    		
		$("#linechart").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100',
			height: '38',
			lineColor: '#ee3158',
			fillColor: '#ffffff',
			lineWidth: 2,
			minSpotColor: '#ee3158',
			maxSpotColor: '#ee3158',
		});
		$("#linechart2").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100',
			height: '38',
			lineColor: '#faa700',
			fillColor: '#ffffff',
			lineWidth: 2,
			minSpotColor: '#faa700',
			maxSpotColor: '#faa700',
		});
		$("#linechart3").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'line',
			width: '100%',
			height: '45',
			lineColor: '#05825f',
			fillColor: '#ffffff',
			lineWidth: 2,
			minSpotColor: '#ee3158',
			maxSpotColor: '#ee3158',
		});
		$("#linechart4").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '50%',
			height: '100',
			lineColor: '#05825f',
			fillColor: '#ffffff',
			lineWidth: 2,
			minSpotColor: '#ee3158',
			maxSpotColor: '#ee3158',
		});
	
		$("#barchart").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'bar',
			height: '38',
			width: '100%',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#3e8ef7',
		});
		$("#barchart2").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'bar',
			height: '38',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#3e8ef7',
		});
		$("#barchart3").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'bar',
			height: '45',
			width: '100%',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#ee3158',
		});
		$("#barchart4").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'bar',
			height: '100',
			width: '50%',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#ee3158',
		});
	
		$("#discretechart").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'discrete',
			width: '50',
			height: '38',
			lineColor: '#3246D3',
		});
		$("#discretechart2").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'discrete',
			width: '50',
			height: '38',
			lineColor: '#3246D3',
		});
		$("#discretechart3").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'discrete',
			width: '180',
			height: '45',
			lineColor: '#0bb2d4',
		});
		$("#discretechart4").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'discrete',
			width: '100',
			height: '100',
			lineColor: '#0bb2d4',
		});
		
		$("#linearea").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100%',
			height: '80',
			lineColor: '#05825f',
			fillColor: '#05825f',
			lineWidth: 2,
		});
		$("#linearea2").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'line',
			width: '100%',
			height: '45',
			lineColor: '#0bb2d4',
			fillColor: '#0bb2d4',
			lineWidth: 2,
		});
		$("#linearea3").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '50%',
			height: '100',
			lineColor: '#0bb2d4',
			fillColor: '#0bb2d4',
			lineWidth: 1,
		});
		
		$("#baralc").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'bar',
			height: '80',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#faa700',
		});
		
		$("#lineIncrease").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '98%',
			height: '92',
			lineWidth: 2,
			lineColor: '#ffffff',
			fillColor: "rgba(255, 255, 255, 0)",
			spotColor: '#ffffff',
			minSpotColor: '#ffffff',
			maxSpotColor: '#ffffff',
			spotRadius: 1,
		});
		
		$("#lineToday").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100%',
			height: '70',
			lineColor: '#ffffff',
			fillColor: 'rgba(255, 255, 255, 0)',
			lineWidth: 2,
			spotRadius: 3,
		});
		
		$("#baranl").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'bar',
			height: '70',
			barColor: '#ee3158',
			barWidth: 7,
    		barSpacing: 5,
		});
		
		$("#lineTo").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100%',
			height: '70',
			lineColor: '#ffffff',
			fillColor: 'rgba(255, 255, 255, 0)',
			lineWidth: 3,
			spotColor: '#ffffff',
			highlightSpotColor: '#ffffff',
			highlightLineColor: '#ffffff',
			spotRadius: 3,
		});
		
		// donut chart
		$('.donut').peity('donut');
		
		// bar chart
		$(".bar").peity("bar");	
	
		
		$('.countnm').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 1000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	
}); // End of use strict
		
// easypie chart
	$(function() {
		'use strict'
		$('.easypie').easyPieChart({
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
		var chart = window.chart = $('.easypie').data('easyPieChart');
		$('.js_update').on('click', function() {
			chart.update(Math.random()*200-100);
		});
	});// End of use strict

// ------------------------------

var Widgetschart = function() {

    

    // Simple bar charts
    var _barChartWidget = function(element, barQty, height, animate, easing, duration, delay, color, tooltip) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var bardata = [];
            for (var i=0; i < barQty; i++) {
                bardata.push(Math.round(Math.random() * 10) + 10);
            }

            // Main variables
            var d3Container = d3.select(element),
                width = d3Container.node().getBoundingClientRect().width;
            


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.ordinal()
                .rangeBands([0, width], 0.3);

            // Vertical
            var y = d3.scale.linear()
                .range([0, height]);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.range(0, bardata.length));

            // Vertical
            y.domain([0, d3.max(bardata)]);



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height)
                .append('g');



            //
            // Append chart elements
            //

            // Bars
            var bars = svg.selectAll('rect')
                .data(bardata)
                .enter()
                .append('rect')
                    .attr('class', 'd3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    })
                    .style('fill', color);



            // Tooltip
            // ------------------------------

            // Initiate
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0]);

            // Show and hide
            if(tooltip == "hours" || tooltip == "goal" || tooltip == "members") {
                bars.call(tip)
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);
            }

            // Daily meetings tooltip content
            if(tooltip == "hours") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "</h6>" +
                            "<span class='font-size-16'>meetings</span>" +
                            "<div class='font-size-16'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }

            // Statements tooltip content
            if(tooltip == "goal") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "</h6>" +
                            "<span class='font-size-16'>statements</span>" +
                            "<div class='font-size-16'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }

            // Online members tooltip content
            if(tooltip == "members") {
                tip.html(function (d, i) {
                    return "<div class='text-center bg-dark p-5'>" +
                            "<h6 class='mb-0'>" + d + "0" + "</h6>" +
                            "<span class='font-size-14'>members</span>" +
                            "<div class='font-size-14'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }



            // Bar loading animation
            // ------------------------------

            // Choose between animated or static
            if(animate) {
                withAnimation();
            } else {
                withoutAnimation();
            }

            // Animate on load
            function withAnimation() {
                bars
                    .attr('height', 0)
                    .attr('y', height)
                    .transition()
                        .attr('height', function(d) {
                            return y(d);
                        })
                        .attr('y', function(d) {
                            return height - y(d);
                        })
                        .delay(function(d, i) {
                            return i * delay;
                        })
                        .duration(duration)
                        .ease(easing);
            }

            // Load without animateion
            function withoutAnimation() {
                bars
                    .attr('height', function(d) {
                        return y(d);
                    })
                    .attr('y', function(d) {
                        return height - y(d);
                    });
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', barsResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', barsResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function barsResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width);

                // Width of appended group
                svg.attr("width", width);

                // Horizontal range
                x.rangeBands([0, width], 0.3);


                // Chart elements
                // -------------------------

                // Bars
                svg.selectAll('.d3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    });
            }
        }
    };

    // Simple line chart
    var _lineChartWidget = function(element, chartHeight, lineColor, pathColor, pointerLineColor, pointerBgColor) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var dataset = [
                {
                    "date": "04/13/14",
                    "alpha": "60"
                }, {
                    "date": "04/14/14",
                    "alpha": "35"
                }, {
                    "date": "04/15/14",
                    "alpha": "65"
                }, {
                    "date": "04/16/14",
                    "alpha": "50"
                }, {
                    "date": "04/17/14",
                    "alpha": "65"
                }, {
                    "date": "04/18/14",
                    "alpha": "20"
                }, {
                    "date": "04/19/14",
                    "alpha": "60"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom,
                padding = 20;

            // Format date
            var parseDate = d3.time.format("%m/%d/%y").parse,
                formatDate = d3.time.format("%a, %B %e");


            // Add tooltip
            // ------------------------------

            var tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1 bg-dark p-5'>" +
                        "<li>" + "<div class='my-1'><i class='fa fa-check mr-2'></i>" + formatDate(d.date) + "</div>" + "</li>" +
                        "<li>" + "Sales: &nbsp;" + "<span class='float-right'>" + d.alpha + "</span>" + "</li>" +
                        "<li>" + "Revenue: &nbsp; " + "<span class='float-right'>" + "$" + (d.alpha * 0).toFixed(2) + "</span>" + "</li>" + 
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                        .call(tooltip);


            // Load data
            // ------------------------------

            dataset.forEach(function (d) {
                d.date = parseDate(d.date);
                d.alpha = +d.alpha;
            });


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .range([padding, width - padding]);

            // Vertical
            var y = d3.scale.linear()
                .range([height, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(dataset, function (d) {
                return d.date;
            }));

            // Vertical
            y.domain([0, d3.max(dataset, function (d) {
                return Math.max(d.alpha);
            })]);


            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .x(function(d) {
                    return x(d.date);
                })
                .y(function(d) {
                    return y(d.alpha);
                });


            //
            // Append chart elements
            //

            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append("defs")
                .append("clipPath")
                .attr("id", "clip-line-small");

            // Add clip shape
            var clipRect = clip.append("rect")
                .attr('class', 'clip')
                .attr("width", 0)
                .attr("height", height);

            // Animate mask
            clipRect
                  .transition()
                      .duration(1000)
                      .ease('linear')
                      .attr("width", width);


            // Line
            // ------------------------------

            // Path
            var path = svg.append('path')
                .attr({
                    'd': line(dataset),
                    "clip-path": "url(#clip-line-small)",
                    'class': 'd3-line d3-line-medium'
                })
                .style('stroke', lineColor);

            // Animate path
            svg.select('.line-tickets')
                .transition()
                    .duration(1000)
                    .ease('linear');


            // Add vertical guide lines
            // ------------------------------

            // Bind data
            var guide = svg.append('g')
                .selectAll('.d3-line-guides-group')
                .data(dataset);

            // Append lines
            guide
                .enter()
                .append('line')
                    .attr('class', 'd3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y1', function (d, i) {
                        return height;
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y2', function (d, i) {
                        return height;
                    })
                    .style('stroke', pathColor)
                    .style('stroke-dasharray', '4,2')
                    .style('shape-rendering', 'crispEdges');

            // Animate guide lines
            guide
                .transition()
                    .duration(1000)
                    .delay(function(d, i) { return i * 150; })
                    .attr('y2', function (d, i) {
                        return y(d.alpha);
                    });


            // Alpha app points
            // ------------------------------

            // Add points
            var points = svg.insert('g')
                .selectAll('.d3-line-circle')
                .data(dataset)
                .enter()
                .append('circle')
                    .attr('class', 'd3-line-circle d3-line-circle-medium')
                    .attr("cx", line.x())
                    .attr("cy", line.y())
                    .attr("r", 3)
                    .style({
                        'stroke': pointerLineColor,
                        'fill': pointerBgColor
                    });

            // Animate points on page load
            points
                .style('opacity', 0)
                .transition()
                    .duration(250)
                    .ease('linear')
                    .delay(1000)
                    .style('opacity', 1);

            // Add user interaction
            points
                .on("mouseover", function (d) {
                    tooltip.offset([-10, 0]).show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })

                // Hide tooltip
                .on("mouseout", function (d) {
                    tooltip.hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of first point
            d3.select(points[0][0])
                .on("mouseover", function (d) {
                    tooltip.offset([0, 10]).direction('e').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on("mouseout", function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of last point
            d3.select(points[0][points.size() - 1])
                .on("mouseover", function (d) {
                    tooltip.offset([0, -10]).direction('w').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on("mouseout", function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });


            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', lineChartResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', lineChartResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function lineChartResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([padding, width - padding]);


                // Chart elements
                // -------------------------

                // Mask
                clipRect.attr("width", width);

                // Line path
                svg.selectAll('.d3-line').attr("d", line(dataset));

                // Circles
                svg.selectAll('.d3-line-circle').attr("cx", line.x());

                // Guide lines
                svg.selectAll('.d3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    });
            }
        }
    };

    // Simple sparklines
    var _sparklinesWidget = function(element, chartType, qty, chartHeight, interpolation, duration, interval, color) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom;


            // Generate random data (for demo only)
            var data = [];
            for (var i=0; i < qty; i++) {
                data.push(Math.floor(Math.random() * qty) + 5);
            }


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.linear().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height - 5, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([1, qty - 3]);

            // Vertical
            y.domain([0, qty]);
                

            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .interpolate(interpolation)
                .x(function(d, i) { return x(i); })
                .y(function(d, i) { return y(d); });

            // Area
            var area = d3.svg.area()
                .interpolate(interpolation)
                .x(function(d,i) { 
                    return x(i); 
                })
                .y0(height)
                .y1(function(d) { 
                    return y(d); 
                });


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append("defs")
                .append("clipPath")
                .attr('id', function(d, i) { return "load-clip-" + element.substring(1); });

            // Add clip shape
            var clips = clip.append("rect")
                .attr('class', 'load-clip')
                .attr("width", 0)
                .attr("height", height);

            // Animate mask
            clips
                .transition()
                    .duration(1000)
                    .ease('linear')
                    .attr("width", width);


            //
            // Append chart elements
            //

            // Main path
            var path = svg.append("g")
                .attr("clip-path", function(d, i) { return "url(#load-clip-" + element.substring(1) + ")"; })
                .append("path")
                    .datum(data)
                    .attr("transform", "translate(" + x(0) + ",0)");

            // Add path based on chart type
            if(chartType == "area") {
                path.attr("d", area).attr('class', 'd3-area').style("fill", color); // area
            }
            else {
                path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color); // line
            }

            // Animate path
            path
                .style('opacity', 0)
                .transition()
                    .duration(500)
                    .style('opacity', 1);



            // Set update interval. For demo only
            // ------------------------------

            setInterval(function() {

                // push a new data point onto the back
                data.push(Math.floor(Math.random() * qty) + 5);

                // pop the old data point off the front
                data.shift();

                update();

            }, interval);



            // Update random data. For demo only
            // ------------------------------

            function update() {

                // Redraw the path and slide it to the left
                path
                    .attr("transform", null)
                    .transition()
                        .duration(duration)
                        .ease("linear")
                        .attr("transform", "translate(" + x(0) + ",0)");

                // Update path type
                if(chartType == "area") {
                    path.attr("d", area).attr('class', 'd3-area').style("fill", color);
                }
                else {
                    path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color);
                }
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeSparklines);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeSparklines);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeSparklines() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Clip mask
                clips.attr("width", width);

                // Line
                svg.select(".d3-line").attr("d", line);

                // Area
                svg.select(".d3-area").attr("d", area);
            }
        }
    };

    

    //
    // Return objects assigned to module
    //

    return {
        init: function() {

            _barChartWidget("#chart_bar_basic", 24, 50, true, "elastic", 1200, 50, "#3e8ef7", "members");
            _barChartWidget("#chart_bar_color", 24, 50, true, "elastic", 1200, 50, "rgba(255,255,255,0.75)", "members");

            _lineChartWidget('#line_chart_simple', 50, '#0bb2d4', '#0bb2d4', '#0bb2d4', '#fff');
            _lineChartWidget('#line_chart_color', 50, '#fff', 'rgba(255,255,255,0.5)', '#fff', '#29B6F6');

            _sparklinesWidget("#sparklines_basic", "area", 30, 50, "basis", 750, 2000, "#0bb2d4");
            _sparklinesWidget("#sparklines_color", "area", 30, 50, "basis", 750, 2000, "rgba(255,255,255,0.75)");
            
        }
    }
}();


// Initialize module
// ------------------------------

// When content loaded
document.addEventListener('DOMContentLoaded', function() {
    Widgetschart.init();
});

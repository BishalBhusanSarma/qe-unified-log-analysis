/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 528.0, "minX": 0.0, "maxY": 1392.0, "series": [{"data": [[0.0, 528.0], [0.1, 529.0], [0.2, 530.0], [0.3, 530.0], [0.4, 534.0], [0.5, 536.0], [0.6, 536.0], [0.7, 537.0], [0.8, 537.0], [0.9, 539.0], [1.0, 539.0], [1.1, 539.0], [1.2, 539.0], [1.3, 540.0], [1.4, 540.0], [1.5, 541.0], [1.6, 542.0], [1.7, 542.0], [1.8, 542.0], [1.9, 543.0], [2.0, 543.0], [2.1, 544.0], [2.2, 544.0], [2.3, 544.0], [2.4, 545.0], [2.5, 545.0], [2.6, 545.0], [2.7, 546.0], [2.8, 546.0], [2.9, 546.0], [3.0, 547.0], [3.1, 547.0], [3.2, 547.0], [3.3, 547.0], [3.4, 547.0], [3.5, 548.0], [3.6, 548.0], [3.7, 548.0], [3.8, 548.0], [3.9, 548.0], [4.0, 549.0], [4.1, 549.0], [4.2, 549.0], [4.3, 550.0], [4.4, 551.0], [4.5, 551.0], [4.6, 551.0], [4.7, 551.0], [4.8, 551.0], [4.9, 552.0], [5.0, 552.0], [5.1, 552.0], [5.2, 552.0], [5.3, 552.0], [5.4, 552.0], [5.5, 552.0], [5.6, 553.0], [5.7, 553.0], [5.8, 553.0], [5.9, 554.0], [6.0, 554.0], [6.1, 554.0], [6.2, 554.0], [6.3, 554.0], [6.4, 554.0], [6.5, 554.0], [6.6, 554.0], [6.7, 554.0], [6.8, 554.0], [6.9, 555.0], [7.0, 556.0], [7.1, 556.0], [7.2, 556.0], [7.3, 556.0], [7.4, 556.0], [7.5, 556.0], [7.6, 556.0], [7.7, 557.0], [7.8, 557.0], [7.9, 557.0], [8.0, 557.0], [8.1, 557.0], [8.2, 557.0], [8.3, 558.0], [8.4, 558.0], [8.5, 558.0], [8.6, 558.0], [8.7, 558.0], [8.8, 558.0], [8.9, 559.0], [9.0, 559.0], [9.1, 559.0], [9.2, 559.0], [9.3, 559.0], [9.4, 559.0], [9.5, 559.0], [9.6, 559.0], [9.7, 559.0], [9.8, 559.0], [9.9, 560.0], [10.0, 560.0], [10.1, 560.0], [10.2, 560.0], [10.3, 560.0], [10.4, 560.0], [10.5, 560.0], [10.6, 560.0], [10.7, 560.0], [10.8, 561.0], [10.9, 561.0], [11.0, 561.0], [11.1, 561.0], [11.2, 561.0], [11.3, 561.0], [11.4, 562.0], [11.5, 562.0], [11.6, 562.0], [11.7, 562.0], [11.8, 562.0], [11.9, 563.0], [12.0, 563.0], [12.1, 563.0], [12.2, 563.0], [12.3, 564.0], [12.4, 564.0], [12.5, 564.0], [12.6, 564.0], [12.7, 564.0], [12.8, 564.0], [12.9, 565.0], [13.0, 565.0], [13.1, 565.0], [13.2, 565.0], [13.3, 565.0], [13.4, 565.0], [13.5, 566.0], [13.6, 566.0], [13.7, 566.0], [13.8, 566.0], [13.9, 566.0], [14.0, 566.0], [14.1, 566.0], [14.2, 567.0], [14.3, 567.0], [14.4, 567.0], [14.5, 568.0], [14.6, 568.0], [14.7, 568.0], [14.8, 568.0], [14.9, 568.0], [15.0, 568.0], [15.1, 569.0], [15.2, 569.0], [15.3, 569.0], [15.4, 569.0], [15.5, 570.0], [15.6, 570.0], [15.7, 570.0], [15.8, 570.0], [15.9, 570.0], [16.0, 570.0], [16.1, 570.0], [16.2, 570.0], [16.3, 570.0], [16.4, 570.0], [16.5, 570.0], [16.6, 570.0], [16.7, 570.0], [16.8, 570.0], [16.9, 570.0], [17.0, 570.0], [17.1, 570.0], [17.2, 570.0], [17.3, 570.0], [17.4, 571.0], [17.5, 571.0], [17.6, 571.0], [17.7, 572.0], [17.8, 572.0], [17.9, 572.0], [18.0, 572.0], [18.1, 572.0], [18.2, 572.0], [18.3, 572.0], [18.4, 572.0], [18.5, 573.0], [18.6, 573.0], [18.7, 573.0], [18.8, 573.0], [18.9, 573.0], [19.0, 573.0], [19.1, 573.0], [19.2, 573.0], [19.3, 573.0], [19.4, 573.0], [19.5, 573.0], [19.6, 574.0], [19.7, 574.0], [19.8, 574.0], [19.9, 574.0], [20.0, 574.0], [20.1, 574.0], [20.2, 574.0], [20.3, 574.0], [20.4, 574.0], [20.5, 574.0], [20.6, 574.0], [20.7, 574.0], [20.8, 574.0], [20.9, 574.0], [21.0, 574.0], [21.1, 575.0], [21.2, 575.0], [21.3, 575.0], [21.4, 575.0], [21.5, 575.0], [21.6, 575.0], [21.7, 575.0], [21.8, 575.0], [21.9, 575.0], [22.0, 576.0], [22.1, 576.0], [22.2, 576.0], [22.3, 576.0], [22.4, 576.0], [22.5, 576.0], [22.6, 576.0], [22.7, 576.0], [22.8, 576.0], [22.9, 576.0], [23.0, 576.0], [23.1, 577.0], [23.2, 577.0], [23.3, 577.0], [23.4, 577.0], [23.5, 577.0], [23.6, 577.0], [23.7, 577.0], [23.8, 577.0], [23.9, 577.0], [24.0, 577.0], [24.1, 577.0], [24.2, 577.0], [24.3, 577.0], [24.4, 577.0], [24.5, 578.0], [24.6, 578.0], [24.7, 578.0], [24.8, 578.0], [24.9, 578.0], [25.0, 578.0], [25.1, 578.0], [25.2, 578.0], [25.3, 578.0], [25.4, 578.0], [25.5, 578.0], [25.6, 579.0], [25.7, 579.0], [25.8, 579.0], [25.9, 579.0], [26.0, 579.0], [26.1, 579.0], [26.2, 579.0], [26.3, 579.0], [26.4, 579.0], [26.5, 579.0], [26.6, 579.0], [26.7, 579.0], [26.8, 580.0], [26.9, 580.0], [27.0, 580.0], [27.1, 580.0], [27.2, 580.0], [27.3, 580.0], [27.4, 580.0], [27.5, 580.0], [27.6, 580.0], [27.7, 580.0], [27.8, 580.0], [27.9, 580.0], [28.0, 580.0], [28.1, 581.0], [28.2, 581.0], [28.3, 581.0], [28.4, 581.0], [28.5, 581.0], [28.6, 581.0], [28.7, 581.0], [28.8, 581.0], [28.9, 581.0], [29.0, 581.0], [29.1, 582.0], [29.2, 582.0], [29.3, 582.0], [29.4, 582.0], [29.5, 582.0], [29.6, 582.0], [29.7, 582.0], [29.8, 582.0], [29.9, 582.0], [30.0, 582.0], [30.1, 582.0], [30.2, 582.0], [30.3, 582.0], [30.4, 582.0], [30.5, 582.0], [30.6, 582.0], [30.7, 582.0], [30.8, 582.0], [30.9, 582.0], [31.0, 583.0], [31.1, 583.0], [31.2, 583.0], [31.3, 583.0], [31.4, 583.0], [31.5, 583.0], [31.6, 583.0], [31.7, 583.0], [31.8, 583.0], [31.9, 583.0], [32.0, 583.0], [32.1, 583.0], [32.2, 583.0], [32.3, 583.0], [32.4, 584.0], [32.5, 584.0], [32.6, 584.0], [32.7, 584.0], [32.8, 584.0], [32.9, 584.0], [33.0, 584.0], [33.1, 584.0], [33.2, 584.0], [33.3, 584.0], [33.4, 584.0], [33.5, 584.0], [33.6, 584.0], [33.7, 584.0], [33.8, 584.0], [33.9, 584.0], [34.0, 585.0], [34.1, 585.0], [34.2, 585.0], [34.3, 585.0], [34.4, 585.0], [34.5, 585.0], [34.6, 585.0], [34.7, 585.0], [34.8, 585.0], [34.9, 585.0], [35.0, 585.0], [35.1, 585.0], [35.2, 585.0], [35.3, 585.0], [35.4, 585.0], [35.5, 585.0], [35.6, 585.0], [35.7, 585.0], [35.8, 585.0], [35.9, 585.0], [36.0, 585.0], [36.1, 585.0], [36.2, 585.0], [36.3, 585.0], [36.4, 585.0], [36.5, 585.0], [36.6, 585.0], [36.7, 586.0], [36.8, 586.0], [36.9, 586.0], [37.0, 586.0], [37.1, 586.0], [37.2, 586.0], [37.3, 586.0], [37.4, 586.0], [37.5, 586.0], [37.6, 586.0], [37.7, 586.0], [37.8, 586.0], [37.9, 586.0], [38.0, 586.0], [38.1, 586.0], [38.2, 586.0], [38.3, 586.0], [38.4, 586.0], [38.5, 586.0], [38.6, 586.0], [38.7, 587.0], [38.8, 587.0], [38.9, 587.0], [39.0, 587.0], [39.1, 587.0], [39.2, 587.0], [39.3, 587.0], [39.4, 587.0], [39.5, 587.0], [39.6, 587.0], [39.7, 587.0], [39.8, 587.0], [39.9, 587.0], [40.0, 587.0], [40.1, 588.0], [40.2, 588.0], [40.3, 588.0], [40.4, 588.0], [40.5, 588.0], [40.6, 588.0], [40.7, 588.0], [40.8, 588.0], [40.9, 588.0], [41.0, 588.0], [41.1, 588.0], [41.2, 588.0], [41.3, 588.0], [41.4, 588.0], [41.5, 588.0], [41.6, 588.0], [41.7, 588.0], [41.8, 589.0], [41.9, 589.0], [42.0, 589.0], [42.1, 589.0], [42.2, 589.0], [42.3, 589.0], [42.4, 589.0], [42.5, 589.0], [42.6, 589.0], [42.7, 589.0], [42.8, 589.0], [42.9, 589.0], [43.0, 589.0], [43.1, 589.0], [43.2, 589.0], [43.3, 589.0], [43.4, 589.0], [43.5, 589.0], [43.6, 589.0], [43.7, 590.0], [43.8, 590.0], [43.9, 590.0], [44.0, 590.0], [44.1, 590.0], [44.2, 590.0], [44.3, 590.0], [44.4, 590.0], [44.5, 590.0], [44.6, 590.0], [44.7, 590.0], [44.8, 590.0], [44.9, 590.0], [45.0, 590.0], [45.1, 590.0], [45.2, 590.0], [45.3, 590.0], [45.4, 590.0], [45.5, 591.0], [45.6, 591.0], [45.7, 591.0], [45.8, 591.0], [45.9, 591.0], [46.0, 591.0], [46.1, 591.0], [46.2, 591.0], [46.3, 591.0], [46.4, 591.0], [46.5, 591.0], [46.6, 591.0], [46.7, 591.0], [46.8, 591.0], [46.9, 591.0], [47.0, 591.0], [47.1, 591.0], [47.2, 591.0], [47.3, 591.0], [47.4, 591.0], [47.5, 591.0], [47.6, 591.0], [47.7, 592.0], [47.8, 592.0], [47.9, 592.0], [48.0, 592.0], [48.1, 592.0], [48.2, 592.0], [48.3, 592.0], [48.4, 592.0], [48.5, 592.0], [48.6, 592.0], [48.7, 592.0], [48.8, 592.0], [48.9, 592.0], [49.0, 592.0], [49.1, 592.0], [49.2, 592.0], [49.3, 592.0], [49.4, 593.0], [49.5, 593.0], [49.6, 593.0], [49.7, 593.0], [49.8, 593.0], [49.9, 593.0], [50.0, 593.0], [50.1, 593.0], [50.2, 593.0], [50.3, 593.0], [50.4, 593.0], [50.5, 593.0], [50.6, 594.0], [50.7, 594.0], [50.8, 594.0], [50.9, 594.0], [51.0, 594.0], [51.1, 594.0], [51.2, 594.0], [51.3, 594.0], [51.4, 594.0], [51.5, 594.0], [51.6, 594.0], [51.7, 594.0], [51.8, 594.0], [51.9, 594.0], [52.0, 594.0], [52.1, 594.0], [52.2, 595.0], [52.3, 595.0], [52.4, 595.0], [52.5, 595.0], [52.6, 595.0], [52.7, 595.0], [52.8, 595.0], [52.9, 595.0], [53.0, 595.0], [53.1, 595.0], [53.2, 595.0], [53.3, 595.0], [53.4, 595.0], [53.5, 595.0], [53.6, 595.0], [53.7, 595.0], [53.8, 595.0], [53.9, 595.0], [54.0, 595.0], [54.1, 595.0], [54.2, 596.0], [54.3, 596.0], [54.4, 596.0], [54.5, 596.0], [54.6, 596.0], [54.7, 596.0], [54.8, 596.0], [54.9, 596.0], [55.0, 596.0], [55.1, 596.0], [55.2, 596.0], [55.3, 596.0], [55.4, 596.0], [55.5, 596.0], [55.6, 596.0], [55.7, 596.0], [55.8, 596.0], [55.9, 596.0], [56.0, 597.0], [56.1, 597.0], [56.2, 597.0], [56.3, 597.0], [56.4, 597.0], [56.5, 597.0], [56.6, 597.0], [56.7, 598.0], [56.8, 598.0], [56.9, 598.0], [57.0, 598.0], [57.1, 598.0], [57.2, 598.0], [57.3, 598.0], [57.4, 598.0], [57.5, 598.0], [57.6, 598.0], [57.7, 598.0], [57.8, 599.0], [57.9, 599.0], [58.0, 599.0], [58.1, 599.0], [58.2, 599.0], [58.3, 599.0], [58.4, 599.0], [58.5, 599.0], [58.6, 599.0], [58.7, 599.0], [58.8, 599.0], [58.9, 599.0], [59.0, 599.0], [59.1, 599.0], [59.2, 599.0], [59.3, 599.0], [59.4, 599.0], [59.5, 600.0], [59.6, 600.0], [59.7, 600.0], [59.8, 600.0], [59.9, 600.0], [60.0, 600.0], [60.1, 600.0], [60.2, 600.0], [60.3, 600.0], [60.4, 600.0], [60.5, 600.0], [60.6, 600.0], [60.7, 600.0], [60.8, 600.0], [60.9, 600.0], [61.0, 600.0], [61.1, 600.0], [61.2, 600.0], [61.3, 601.0], [61.4, 601.0], [61.5, 601.0], [61.6, 601.0], [61.7, 601.0], [61.8, 601.0], [61.9, 601.0], [62.0, 601.0], [62.1, 601.0], [62.2, 601.0], [62.3, 601.0], [62.4, 601.0], [62.5, 601.0], [62.6, 602.0], [62.7, 602.0], [62.8, 602.0], [62.9, 602.0], [63.0, 602.0], [63.1, 602.0], [63.2, 603.0], [63.3, 603.0], [63.4, 603.0], [63.5, 603.0], [63.6, 603.0], [63.7, 603.0], [63.8, 603.0], [63.9, 603.0], [64.0, 604.0], [64.1, 604.0], [64.2, 604.0], [64.3, 604.0], [64.4, 604.0], [64.5, 604.0], [64.6, 604.0], [64.7, 604.0], [64.8, 604.0], [64.9, 604.0], [65.0, 604.0], [65.1, 604.0], [65.2, 605.0], [65.3, 605.0], [65.4, 605.0], [65.5, 605.0], [65.6, 605.0], [65.7, 605.0], [65.8, 605.0], [65.9, 605.0], [66.0, 605.0], [66.1, 605.0], [66.2, 606.0], [66.3, 606.0], [66.4, 606.0], [66.5, 606.0], [66.6, 606.0], [66.7, 606.0], [66.8, 606.0], [66.9, 606.0], [67.0, 606.0], [67.1, 606.0], [67.2, 606.0], [67.3, 606.0], [67.4, 606.0], [67.5, 606.0], [67.6, 606.0], [67.7, 607.0], [67.8, 607.0], [67.9, 607.0], [68.0, 607.0], [68.1, 607.0], [68.2, 607.0], [68.3, 608.0], [68.4, 608.0], [68.5, 608.0], [68.6, 608.0], [68.7, 608.0], [68.8, 608.0], [68.9, 608.0], [69.0, 608.0], [69.1, 608.0], [69.2, 608.0], [69.3, 608.0], [69.4, 608.0], [69.5, 608.0], [69.6, 608.0], [69.7, 609.0], [69.8, 609.0], [69.9, 609.0], [70.0, 609.0], [70.1, 609.0], [70.2, 609.0], [70.3, 610.0], [70.4, 610.0], [70.5, 610.0], [70.6, 610.0], [70.7, 610.0], [70.8, 610.0], [70.9, 610.0], [71.0, 610.0], [71.1, 610.0], [71.2, 610.0], [71.3, 610.0], [71.4, 611.0], [71.5, 611.0], [71.6, 611.0], [71.7, 611.0], [71.8, 611.0], [71.9, 612.0], [72.0, 612.0], [72.1, 612.0], [72.2, 612.0], [72.3, 612.0], [72.4, 612.0], [72.5, 612.0], [72.6, 612.0], [72.7, 612.0], [72.8, 612.0], [72.9, 613.0], [73.0, 613.0], [73.1, 613.0], [73.2, 613.0], [73.3, 613.0], [73.4, 613.0], [73.5, 614.0], [73.6, 614.0], [73.7, 614.0], [73.8, 614.0], [73.9, 614.0], [74.0, 615.0], [74.1, 615.0], [74.2, 615.0], [74.3, 615.0], [74.4, 615.0], [74.5, 616.0], [74.6, 616.0], [74.7, 616.0], [74.8, 616.0], [74.9, 616.0], [75.0, 616.0], [75.1, 616.0], [75.2, 616.0], [75.3, 616.0], [75.4, 617.0], [75.5, 617.0], [75.6, 618.0], [75.7, 618.0], [75.8, 618.0], [75.9, 619.0], [76.0, 619.0], [76.1, 619.0], [76.2, 619.0], [76.3, 620.0], [76.4, 620.0], [76.5, 620.0], [76.6, 620.0], [76.7, 620.0], [76.8, 620.0], [76.9, 620.0], [77.0, 620.0], [77.1, 620.0], [77.2, 621.0], [77.3, 621.0], [77.4, 622.0], [77.5, 622.0], [77.6, 622.0], [77.7, 623.0], [77.8, 623.0], [77.9, 623.0], [78.0, 624.0], [78.1, 624.0], [78.2, 625.0], [78.3, 625.0], [78.4, 625.0], [78.5, 626.0], [78.6, 626.0], [78.7, 626.0], [78.8, 626.0], [78.9, 626.0], [79.0, 626.0], [79.1, 627.0], [79.2, 627.0], [79.3, 628.0], [79.4, 628.0], [79.5, 628.0], [79.6, 628.0], [79.7, 628.0], [79.8, 628.0], [79.9, 628.0], [80.0, 628.0], [80.1, 629.0], [80.2, 629.0], [80.3, 630.0], [80.4, 630.0], [80.5, 630.0], [80.6, 631.0], [80.7, 632.0], [80.8, 632.0], [80.9, 632.0], [81.0, 632.0], [81.1, 632.0], [81.2, 632.0], [81.3, 632.0], [81.4, 632.0], [81.5, 633.0], [81.6, 634.0], [81.7, 634.0], [81.8, 634.0], [81.9, 635.0], [82.0, 637.0], [82.1, 637.0], [82.2, 638.0], [82.3, 638.0], [82.4, 638.0], [82.5, 639.0], [82.6, 639.0], [82.7, 640.0], [82.8, 640.0], [82.9, 640.0], [83.0, 640.0], [83.1, 641.0], [83.2, 643.0], [83.3, 643.0], [83.4, 644.0], [83.5, 644.0], [83.6, 645.0], [83.7, 646.0], [83.8, 646.0], [83.9, 646.0], [84.0, 647.0], [84.1, 647.0], [84.2, 647.0], [84.3, 647.0], [84.4, 648.0], [84.5, 648.0], [84.6, 648.0], [84.7, 648.0], [84.8, 648.0], [84.9, 649.0], [85.0, 649.0], [85.1, 650.0], [85.2, 650.0], [85.3, 650.0], [85.4, 651.0], [85.5, 652.0], [85.6, 653.0], [85.7, 655.0], [85.8, 655.0], [85.9, 656.0], [86.0, 656.0], [86.1, 657.0], [86.2, 657.0], [86.3, 659.0], [86.4, 660.0], [86.5, 660.0], [86.6, 661.0], [86.7, 662.0], [86.8, 662.0], [86.9, 662.0], [87.0, 663.0], [87.1, 664.0], [87.2, 666.0], [87.3, 666.0], [87.4, 667.0], [87.5, 667.0], [87.6, 669.0], [87.7, 669.0], [87.8, 669.0], [87.9, 670.0], [88.0, 670.0], [88.1, 671.0], [88.2, 671.0], [88.3, 671.0], [88.4, 671.0], [88.5, 672.0], [88.6, 673.0], [88.7, 674.0], [88.8, 675.0], [88.9, 676.0], [89.0, 676.0], [89.1, 678.0], [89.2, 679.0], [89.3, 680.0], [89.4, 680.0], [89.5, 680.0], [89.6, 681.0], [89.7, 681.0], [89.8, 682.0], [89.9, 683.0], [90.0, 684.0], [90.1, 685.0], [90.2, 686.0], [90.3, 687.0], [90.4, 688.0], [90.5, 691.0], [90.6, 692.0], [90.7, 693.0], [90.8, 693.0], [90.9, 693.0], [91.0, 694.0], [91.1, 698.0], [91.2, 700.0], [91.3, 701.0], [91.4, 701.0], [91.5, 702.0], [91.6, 702.0], [91.7, 703.0], [91.8, 704.0], [91.9, 706.0], [92.0, 706.0], [92.1, 708.0], [92.2, 713.0], [92.3, 713.0], [92.4, 716.0], [92.5, 716.0], [92.6, 716.0], [92.7, 719.0], [92.8, 720.0], [92.9, 720.0], [93.0, 721.0], [93.1, 722.0], [93.2, 726.0], [93.3, 728.0], [93.4, 728.0], [93.5, 731.0], [93.6, 740.0], [93.7, 742.0], [93.8, 742.0], [93.9, 742.0], [94.0, 743.0], [94.1, 744.0], [94.2, 744.0], [94.3, 748.0], [94.4, 750.0], [94.5, 752.0], [94.6, 759.0], [94.7, 760.0], [94.8, 763.0], [94.9, 766.0], [95.0, 768.0], [95.1, 769.0], [95.2, 770.0], [95.3, 771.0], [95.4, 771.0], [95.5, 774.0], [95.6, 778.0], [95.7, 780.0], [95.8, 783.0], [95.9, 786.0], [96.0, 786.0], [96.1, 788.0], [96.2, 789.0], [96.3, 791.0], [96.4, 792.0], [96.5, 792.0], [96.6, 794.0], [96.7, 794.0], [96.8, 795.0], [96.9, 795.0], [97.0, 798.0], [97.1, 800.0], [97.2, 800.0], [97.3, 800.0], [97.4, 810.0], [97.5, 810.0], [97.6, 811.0], [97.7, 851.0], [97.8, 853.0], [97.9, 867.0], [98.0, 1032.0], [98.1, 1104.0], [98.2, 1104.0], [98.3, 1106.0], [98.4, 1142.0], [98.5, 1153.0], [98.6, 1154.0], [98.7, 1192.0], [98.8, 1217.0], [98.9, 1227.0], [99.0, 1239.0], [99.1, 1288.0], [99.2, 1302.0], [99.3, 1302.0], [99.4, 1318.0], [99.5, 1332.0], [99.6, 1354.0], [99.7, 1359.0], [99.8, 1375.0], [99.9, 1392.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 594.0, "series": [{"data": [[1100.0, 7.0], [600.0, 318.0], [1200.0, 4.0], [1300.0, 8.0], [700.0, 59.0], [800.0, 9.0], [1000.0, 1.0], [500.0, 594.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1000.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1000.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.591240875912417, "minX": 1.77158466E12, "maxY": 11.78563151796061, "series": [{"data": [[1.77158466E12, 9.591240875912417], [1.77158472E12, 11.78563151796061]], "isOverall": false, "label": "StagesAPI", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158472E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 593.0625000000001, "minX": 1.0, "maxY": 742.2500000000001, "series": [{"data": [[2.0, 725.0000000000001], [8.0, 610.5384615384615], [9.0, 593.0625000000001], [10.0, 600.8965517241381], [11.0, 645.5000000000001], [3.0, 742.2500000000001], [12.0, 607.9507389162559], [13.0, 619.1631944444439], [14.0, 619.6724137931033], [4.0, 667.2222222222222], [1.0, 650.5], [5.0, 632.5294117647056], [6.0, 647.5], [7.0, 639.2272727272726]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.485000000000003, 618.509]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 563.9833333333333, "minX": 1.77158466E12, "maxY": 9679.983333333334, "series": [{"data": [[1.77158466E12, 1536.6833333333334], [1.77158472E12, 9679.983333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77158466E12, 563.9833333333333], [1.77158472E12, 3552.6833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158472E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 610.3093858632689, "minX": 1.77158466E12, "maxY": 670.1605839416059, "series": [{"data": [[1.77158466E12, 670.1605839416059], [1.77158472E12, 610.3093858632689]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158472E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 609.1796060254924, "minX": 1.77158466E12, "maxY": 669.2335766423357, "series": [{"data": [[1.77158466E12, 669.2335766423357], [1.77158472E12, 609.1796060254924]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158472E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 7.658169177288525, "minX": 1.77158466E12, "maxY": 21.124087591240873, "series": [{"data": [[1.77158466E12, 21.124087591240873], [1.77158472E12, 7.658169177288525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158472E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 528.0, "minX": 1.77158466E12, "maxY": 1392.0, "series": [{"data": [[1.77158466E12, 1375.0], [1.77158472E12, 1392.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77158466E12, 544.0], [1.77158472E12, 528.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77158466E12, 810.2], [1.77158472E12, 676.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77158466E12, 1368.92], [1.77158472E12, 1117.6800000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77158466E12, 612.0], [1.77158472E12, 591.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77158466E12, 1161.2999999999995], [1.77158472E12, 742.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158472E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 584.5, "minX": 1.0, "maxY": 899.5, "series": [{"data": [[2.0, 699.0], [8.0, 585.0], [10.0, 598.5], [11.0, 605.0], [3.0, 899.5], [12.0, 584.5], [13.0, 632.0], [14.0, 589.5], [15.0, 602.0], [1.0, 703.0], [16.0, 603.5], [4.0, 654.5], [17.0, 593.0], [18.0, 609.0], [19.0, 601.0], [20.0, 594.5], [21.0, 590.0], [22.0, 585.0], [23.0, 589.0], [6.0, 610.0], [7.0, 681.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 584.5, "minX": 1.0, "maxY": 899.5, "series": [{"data": [[2.0, 699.0], [8.0, 584.5], [10.0, 595.0], [11.0, 605.0], [3.0, 899.5], [12.0, 584.5], [13.0, 632.0], [14.0, 589.5], [15.0, 602.0], [1.0, 703.0], [16.0, 601.5], [4.0, 654.5], [17.0, 593.0], [18.0, 609.0], [19.0, 599.0], [20.0, 593.0], [21.0, 589.5], [22.0, 585.0], [23.0, 589.0], [6.0, 608.5], [7.0, 681.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.77158466E12, "maxY": 14.15, "series": [{"data": [[1.77158466E12, 2.5166666666666666], [1.77158472E12, 14.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158472E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.283333333333333, "minX": 1.77158466E12, "maxY": 14.383333333333333, "series": [{"data": [[1.77158466E12, 2.283333333333333], [1.77158472E12, 14.383333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158472E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.283333333333333, "minX": 1.77158466E12, "maxY": 14.383333333333333, "series": [{"data": [[1.77158466E12, 2.283333333333333], [1.77158472E12, 14.383333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158472E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.283333333333333, "minX": 1.77158466E12, "maxY": 14.383333333333333, "series": [{"data": [[1.77158466E12, 2.283333333333333], [1.77158472E12, 14.383333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158472E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


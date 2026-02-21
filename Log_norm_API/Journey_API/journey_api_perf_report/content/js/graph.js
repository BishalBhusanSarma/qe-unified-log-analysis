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
        data: {"result": {"minY": 524.0, "minX": 0.0, "maxY": 1386.0, "series": [{"data": [[0.0, 524.0], [0.1, 526.0], [0.2, 526.0], [0.3, 526.0], [0.4, 528.0], [0.5, 529.0], [0.6, 529.0], [0.7, 529.0], [0.8, 531.0], [0.9, 531.0], [1.0, 532.0], [1.1, 532.0], [1.2, 533.0], [1.3, 533.0], [1.4, 534.0], [1.5, 534.0], [1.6, 534.0], [1.7, 535.0], [1.8, 535.0], [1.9, 535.0], [2.0, 535.0], [2.1, 535.0], [2.2, 536.0], [2.3, 536.0], [2.4, 537.0], [2.5, 538.0], [2.6, 539.0], [2.7, 539.0], [2.8, 540.0], [2.9, 540.0], [3.0, 540.0], [3.1, 540.0], [3.2, 541.0], [3.3, 541.0], [3.4, 542.0], [3.5, 542.0], [3.6, 542.0], [3.7, 542.0], [3.8, 542.0], [3.9, 543.0], [4.0, 543.0], [4.1, 543.0], [4.2, 544.0], [4.3, 544.0], [4.4, 544.0], [4.5, 544.0], [4.6, 544.0], [4.7, 545.0], [4.8, 545.0], [4.9, 546.0], [5.0, 546.0], [5.1, 546.0], [5.2, 546.0], [5.3, 546.0], [5.4, 546.0], [5.5, 546.0], [5.6, 546.0], [5.7, 547.0], [5.8, 547.0], [5.9, 548.0], [6.0, 549.0], [6.1, 549.0], [6.2, 549.0], [6.3, 549.0], [6.4, 549.0], [6.5, 549.0], [6.6, 549.0], [6.7, 549.0], [6.8, 550.0], [6.9, 550.0], [7.0, 550.0], [7.1, 550.0], [7.2, 550.0], [7.3, 550.0], [7.4, 551.0], [7.5, 551.0], [7.6, 551.0], [7.7, 551.0], [7.8, 551.0], [7.9, 552.0], [8.0, 552.0], [8.1, 552.0], [8.2, 552.0], [8.3, 553.0], [8.4, 553.0], [8.5, 554.0], [8.6, 554.0], [8.7, 554.0], [8.8, 554.0], [8.9, 554.0], [9.0, 555.0], [9.1, 555.0], [9.2, 555.0], [9.3, 555.0], [9.4, 555.0], [9.5, 555.0], [9.6, 555.0], [9.7, 555.0], [9.8, 555.0], [9.9, 555.0], [10.0, 555.0], [10.1, 555.0], [10.2, 556.0], [10.3, 556.0], [10.4, 556.0], [10.5, 557.0], [10.6, 557.0], [10.7, 557.0], [10.8, 557.0], [10.9, 557.0], [11.0, 557.0], [11.1, 558.0], [11.2, 558.0], [11.3, 559.0], [11.4, 559.0], [11.5, 559.0], [11.6, 559.0], [11.7, 559.0], [11.8, 559.0], [11.9, 560.0], [12.0, 560.0], [12.1, 560.0], [12.2, 560.0], [12.3, 560.0], [12.4, 561.0], [12.5, 561.0], [12.6, 561.0], [12.7, 561.0], [12.8, 561.0], [12.9, 561.0], [13.0, 561.0], [13.1, 562.0], [13.2, 562.0], [13.3, 562.0], [13.4, 562.0], [13.5, 562.0], [13.6, 562.0], [13.7, 563.0], [13.8, 563.0], [13.9, 563.0], [14.0, 563.0], [14.1, 564.0], [14.2, 564.0], [14.3, 564.0], [14.4, 564.0], [14.5, 564.0], [14.6, 565.0], [14.7, 565.0], [14.8, 565.0], [14.9, 565.0], [15.0, 565.0], [15.1, 566.0], [15.2, 566.0], [15.3, 566.0], [15.4, 566.0], [15.5, 566.0], [15.6, 566.0], [15.7, 566.0], [15.8, 567.0], [15.9, 567.0], [16.0, 567.0], [16.1, 567.0], [16.2, 567.0], [16.3, 567.0], [16.4, 567.0], [16.5, 568.0], [16.6, 568.0], [16.7, 568.0], [16.8, 568.0], [16.9, 568.0], [17.0, 568.0], [17.1, 568.0], [17.2, 568.0], [17.3, 568.0], [17.4, 569.0], [17.5, 569.0], [17.6, 569.0], [17.7, 569.0], [17.8, 569.0], [17.9, 569.0], [18.0, 569.0], [18.1, 569.0], [18.2, 569.0], [18.3, 569.0], [18.4, 569.0], [18.5, 570.0], [18.6, 570.0], [18.7, 570.0], [18.8, 570.0], [18.9, 570.0], [19.0, 570.0], [19.1, 570.0], [19.2, 571.0], [19.3, 571.0], [19.4, 571.0], [19.5, 571.0], [19.6, 571.0], [19.7, 571.0], [19.8, 571.0], [19.9, 571.0], [20.0, 571.0], [20.1, 571.0], [20.2, 571.0], [20.3, 571.0], [20.4, 571.0], [20.5, 572.0], [20.6, 572.0], [20.7, 572.0], [20.8, 572.0], [20.9, 572.0], [21.0, 572.0], [21.1, 572.0], [21.2, 572.0], [21.3, 572.0], [21.4, 573.0], [21.5, 573.0], [21.6, 573.0], [21.7, 573.0], [21.8, 573.0], [21.9, 573.0], [22.0, 573.0], [22.1, 573.0], [22.2, 573.0], [22.3, 573.0], [22.4, 573.0], [22.5, 573.0], [22.6, 574.0], [22.7, 574.0], [22.8, 574.0], [22.9, 574.0], [23.0, 574.0], [23.1, 574.0], [23.2, 574.0], [23.3, 574.0], [23.4, 574.0], [23.5, 574.0], [23.6, 574.0], [23.7, 574.0], [23.8, 574.0], [23.9, 574.0], [24.0, 574.0], [24.1, 574.0], [24.2, 574.0], [24.3, 574.0], [24.4, 574.0], [24.5, 574.0], [24.6, 575.0], [24.7, 575.0], [24.8, 575.0], [24.9, 575.0], [25.0, 575.0], [25.1, 575.0], [25.2, 575.0], [25.3, 575.0], [25.4, 575.0], [25.5, 575.0], [25.6, 575.0], [25.7, 575.0], [25.8, 575.0], [25.9, 575.0], [26.0, 575.0], [26.1, 575.0], [26.2, 575.0], [26.3, 576.0], [26.4, 576.0], [26.5, 576.0], [26.6, 576.0], [26.7, 576.0], [26.8, 576.0], [26.9, 576.0], [27.0, 576.0], [27.1, 576.0], [27.2, 576.0], [27.3, 576.0], [27.4, 576.0], [27.5, 576.0], [27.6, 576.0], [27.7, 576.0], [27.8, 576.0], [27.9, 577.0], [28.0, 577.0], [28.1, 577.0], [28.2, 577.0], [28.3, 577.0], [28.4, 577.0], [28.5, 577.0], [28.6, 577.0], [28.7, 577.0], [28.8, 577.0], [28.9, 577.0], [29.0, 577.0], [29.1, 577.0], [29.2, 577.0], [29.3, 578.0], [29.4, 578.0], [29.5, 578.0], [29.6, 578.0], [29.7, 578.0], [29.8, 578.0], [29.9, 578.0], [30.0, 578.0], [30.1, 578.0], [30.2, 578.0], [30.3, 578.0], [30.4, 578.0], [30.5, 578.0], [30.6, 578.0], [30.7, 578.0], [30.8, 578.0], [30.9, 579.0], [31.0, 579.0], [31.1, 579.0], [31.2, 579.0], [31.3, 579.0], [31.4, 579.0], [31.5, 579.0], [31.6, 579.0], [31.7, 579.0], [31.8, 579.0], [31.9, 579.0], [32.0, 579.0], [32.1, 579.0], [32.2, 579.0], [32.3, 579.0], [32.4, 579.0], [32.5, 579.0], [32.6, 579.0], [32.7, 580.0], [32.8, 580.0], [32.9, 580.0], [33.0, 580.0], [33.1, 580.0], [33.2, 580.0], [33.3, 580.0], [33.4, 580.0], [33.5, 580.0], [33.6, 580.0], [33.7, 580.0], [33.8, 580.0], [33.9, 580.0], [34.0, 580.0], [34.1, 580.0], [34.2, 580.0], [34.3, 580.0], [34.4, 580.0], [34.5, 580.0], [34.6, 580.0], [34.7, 580.0], [34.8, 581.0], [34.9, 581.0], [35.0, 581.0], [35.1, 581.0], [35.2, 581.0], [35.3, 581.0], [35.4, 581.0], [35.5, 581.0], [35.6, 581.0], [35.7, 581.0], [35.8, 581.0], [35.9, 581.0], [36.0, 581.0], [36.1, 581.0], [36.2, 581.0], [36.3, 581.0], [36.4, 581.0], [36.5, 581.0], [36.6, 581.0], [36.7, 581.0], [36.8, 582.0], [36.9, 582.0], [37.0, 582.0], [37.1, 582.0], [37.2, 582.0], [37.3, 582.0], [37.4, 582.0], [37.5, 582.0], [37.6, 582.0], [37.7, 582.0], [37.8, 582.0], [37.9, 582.0], [38.0, 582.0], [38.1, 582.0], [38.2, 582.0], [38.3, 582.0], [38.4, 582.0], [38.5, 583.0], [38.6, 583.0], [38.7, 583.0], [38.8, 583.0], [38.9, 583.0], [39.0, 583.0], [39.1, 583.0], [39.2, 583.0], [39.3, 583.0], [39.4, 583.0], [39.5, 583.0], [39.6, 583.0], [39.7, 583.0], [39.8, 583.0], [39.9, 583.0], [40.0, 583.0], [40.1, 583.0], [40.2, 583.0], [40.3, 583.0], [40.4, 584.0], [40.5, 584.0], [40.6, 584.0], [40.7, 584.0], [40.8, 584.0], [40.9, 584.0], [41.0, 584.0], [41.1, 584.0], [41.2, 584.0], [41.3, 584.0], [41.4, 584.0], [41.5, 584.0], [41.6, 584.0], [41.7, 584.0], [41.8, 584.0], [41.9, 584.0], [42.0, 584.0], [42.1, 584.0], [42.2, 585.0], [42.3, 585.0], [42.4, 585.0], [42.5, 585.0], [42.6, 585.0], [42.7, 585.0], [42.8, 585.0], [42.9, 585.0], [43.0, 585.0], [43.1, 585.0], [43.2, 585.0], [43.3, 585.0], [43.4, 585.0], [43.5, 585.0], [43.6, 585.0], [43.7, 585.0], [43.8, 585.0], [43.9, 585.0], [44.0, 585.0], [44.1, 585.0], [44.2, 585.0], [44.3, 585.0], [44.4, 585.0], [44.5, 585.0], [44.6, 585.0], [44.7, 585.0], [44.8, 586.0], [44.9, 586.0], [45.0, 586.0], [45.1, 586.0], [45.2, 586.0], [45.3, 586.0], [45.4, 586.0], [45.5, 586.0], [45.6, 586.0], [45.7, 586.0], [45.8, 586.0], [45.9, 586.0], [46.0, 586.0], [46.1, 586.0], [46.2, 586.0], [46.3, 586.0], [46.4, 586.0], [46.5, 586.0], [46.6, 586.0], [46.7, 586.0], [46.8, 586.0], [46.9, 586.0], [47.0, 586.0], [47.1, 586.0], [47.2, 586.0], [47.3, 587.0], [47.4, 587.0], [47.5, 587.0], [47.6, 587.0], [47.7, 587.0], [47.8, 587.0], [47.9, 587.0], [48.0, 587.0], [48.1, 587.0], [48.2, 587.0], [48.3, 587.0], [48.4, 587.0], [48.5, 587.0], [48.6, 587.0], [48.7, 587.0], [48.8, 587.0], [48.9, 587.0], [49.0, 587.0], [49.1, 588.0], [49.2, 588.0], [49.3, 588.0], [49.4, 588.0], [49.5, 588.0], [49.6, 588.0], [49.7, 588.0], [49.8, 588.0], [49.9, 588.0], [50.0, 588.0], [50.1, 588.0], [50.2, 588.0], [50.3, 588.0], [50.4, 588.0], [50.5, 588.0], [50.6, 588.0], [50.7, 588.0], [50.8, 588.0], [50.9, 588.0], [51.0, 589.0], [51.1, 589.0], [51.2, 589.0], [51.3, 589.0], [51.4, 589.0], [51.5, 589.0], [51.6, 589.0], [51.7, 589.0], [51.8, 589.0], [51.9, 589.0], [52.0, 589.0], [52.1, 589.0], [52.2, 589.0], [52.3, 589.0], [52.4, 589.0], [52.5, 590.0], [52.6, 590.0], [52.7, 590.0], [52.8, 590.0], [52.9, 590.0], [53.0, 590.0], [53.1, 590.0], [53.2, 590.0], [53.3, 590.0], [53.4, 590.0], [53.5, 590.0], [53.6, 590.0], [53.7, 590.0], [53.8, 590.0], [53.9, 590.0], [54.0, 590.0], [54.1, 590.0], [54.2, 590.0], [54.3, 590.0], [54.4, 590.0], [54.5, 590.0], [54.6, 590.0], [54.7, 590.0], [54.8, 590.0], [54.9, 590.0], [55.0, 591.0], [55.1, 591.0], [55.2, 591.0], [55.3, 591.0], [55.4, 591.0], [55.5, 591.0], [55.6, 591.0], [55.7, 591.0], [55.8, 591.0], [55.9, 591.0], [56.0, 591.0], [56.1, 591.0], [56.2, 591.0], [56.3, 591.0], [56.4, 591.0], [56.5, 591.0], [56.6, 591.0], [56.7, 591.0], [56.8, 592.0], [56.9, 592.0], [57.0, 592.0], [57.1, 592.0], [57.2, 592.0], [57.3, 592.0], [57.4, 592.0], [57.5, 592.0], [57.6, 592.0], [57.7, 592.0], [57.8, 592.0], [57.9, 592.0], [58.0, 592.0], [58.1, 592.0], [58.2, 592.0], [58.3, 592.0], [58.4, 593.0], [58.5, 593.0], [58.6, 593.0], [58.7, 593.0], [58.8, 593.0], [58.9, 593.0], [59.0, 593.0], [59.1, 593.0], [59.2, 593.0], [59.3, 593.0], [59.4, 593.0], [59.5, 593.0], [59.6, 593.0], [59.7, 593.0], [59.8, 594.0], [59.9, 594.0], [60.0, 594.0], [60.1, 594.0], [60.2, 594.0], [60.3, 594.0], [60.4, 594.0], [60.5, 594.0], [60.6, 594.0], [60.7, 594.0], [60.8, 594.0], [60.9, 594.0], [61.0, 594.0], [61.1, 594.0], [61.2, 594.0], [61.3, 595.0], [61.4, 595.0], [61.5, 595.0], [61.6, 595.0], [61.7, 595.0], [61.8, 595.0], [61.9, 595.0], [62.0, 595.0], [62.1, 595.0], [62.2, 595.0], [62.3, 595.0], [62.4, 595.0], [62.5, 595.0], [62.6, 595.0], [62.7, 595.0], [62.8, 595.0], [62.9, 595.0], [63.0, 596.0], [63.1, 596.0], [63.2, 596.0], [63.3, 596.0], [63.4, 596.0], [63.5, 596.0], [63.6, 596.0], [63.7, 596.0], [63.8, 596.0], [63.9, 596.0], [64.0, 596.0], [64.1, 597.0], [64.2, 597.0], [64.3, 597.0], [64.4, 597.0], [64.5, 597.0], [64.6, 597.0], [64.7, 597.0], [64.8, 597.0], [64.9, 597.0], [65.0, 597.0], [65.1, 597.0], [65.2, 598.0], [65.3, 598.0], [65.4, 598.0], [65.5, 598.0], [65.6, 598.0], [65.7, 598.0], [65.8, 598.0], [65.9, 598.0], [66.0, 598.0], [66.1, 598.0], [66.2, 598.0], [66.3, 598.0], [66.4, 599.0], [66.5, 599.0], [66.6, 599.0], [66.7, 599.0], [66.8, 599.0], [66.9, 599.0], [67.0, 599.0], [67.1, 599.0], [67.2, 599.0], [67.3, 599.0], [67.4, 599.0], [67.5, 599.0], [67.6, 599.0], [67.7, 599.0], [67.8, 599.0], [67.9, 599.0], [68.0, 599.0], [68.1, 599.0], [68.2, 599.0], [68.3, 599.0], [68.4, 599.0], [68.5, 600.0], [68.6, 600.0], [68.7, 600.0], [68.8, 600.0], [68.9, 600.0], [69.0, 600.0], [69.1, 600.0], [69.2, 600.0], [69.3, 600.0], [69.4, 600.0], [69.5, 600.0], [69.6, 600.0], [69.7, 600.0], [69.8, 600.0], [69.9, 600.0], [70.0, 600.0], [70.1, 600.0], [70.2, 600.0], [70.3, 600.0], [70.4, 601.0], [70.5, 601.0], [70.6, 601.0], [70.7, 601.0], [70.8, 601.0], [70.9, 601.0], [71.0, 601.0], [71.1, 601.0], [71.2, 601.0], [71.3, 601.0], [71.4, 601.0], [71.5, 602.0], [71.6, 602.0], [71.7, 602.0], [71.8, 602.0], [71.9, 602.0], [72.0, 602.0], [72.1, 603.0], [72.2, 603.0], [72.3, 603.0], [72.4, 603.0], [72.5, 603.0], [72.6, 603.0], [72.7, 603.0], [72.8, 603.0], [72.9, 603.0], [73.0, 603.0], [73.1, 604.0], [73.2, 604.0], [73.3, 604.0], [73.4, 604.0], [73.5, 604.0], [73.6, 604.0], [73.7, 604.0], [73.8, 605.0], [73.9, 605.0], [74.0, 605.0], [74.1, 605.0], [74.2, 605.0], [74.3, 605.0], [74.4, 605.0], [74.5, 605.0], [74.6, 606.0], [74.7, 606.0], [74.8, 606.0], [74.9, 606.0], [75.0, 606.0], [75.1, 606.0], [75.2, 606.0], [75.3, 606.0], [75.4, 606.0], [75.5, 606.0], [75.6, 606.0], [75.7, 606.0], [75.8, 606.0], [75.9, 606.0], [76.0, 607.0], [76.1, 607.0], [76.2, 607.0], [76.3, 607.0], [76.4, 607.0], [76.5, 607.0], [76.6, 608.0], [76.7, 608.0], [76.8, 608.0], [76.9, 608.0], [77.0, 609.0], [77.1, 609.0], [77.2, 609.0], [77.3, 610.0], [77.4, 610.0], [77.5, 610.0], [77.6, 610.0], [77.7, 610.0], [77.8, 610.0], [77.9, 611.0], [78.0, 611.0], [78.1, 611.0], [78.2, 612.0], [78.3, 613.0], [78.4, 613.0], [78.5, 613.0], [78.6, 613.0], [78.7, 613.0], [78.8, 613.0], [78.9, 613.0], [79.0, 613.0], [79.1, 614.0], [79.2, 614.0], [79.3, 614.0], [79.4, 614.0], [79.5, 614.0], [79.6, 614.0], [79.7, 614.0], [79.8, 614.0], [79.9, 614.0], [80.0, 615.0], [80.1, 615.0], [80.2, 615.0], [80.3, 615.0], [80.4, 615.0], [80.5, 615.0], [80.6, 616.0], [80.7, 617.0], [80.8, 617.0], [80.9, 617.0], [81.0, 618.0], [81.1, 619.0], [81.2, 619.0], [81.3, 619.0], [81.4, 619.0], [81.5, 620.0], [81.6, 620.0], [81.7, 620.0], [81.8, 621.0], [81.9, 621.0], [82.0, 622.0], [82.1, 622.0], [82.2, 622.0], [82.3, 623.0], [82.4, 623.0], [82.5, 623.0], [82.6, 623.0], [82.7, 623.0], [82.8, 624.0], [82.9, 625.0], [83.0, 625.0], [83.1, 625.0], [83.2, 625.0], [83.3, 626.0], [83.4, 626.0], [83.5, 626.0], [83.6, 626.0], [83.7, 627.0], [83.8, 627.0], [83.9, 628.0], [84.0, 628.0], [84.1, 628.0], [84.2, 628.0], [84.3, 628.0], [84.4, 628.0], [84.5, 628.0], [84.6, 629.0], [84.7, 630.0], [84.8, 630.0], [84.9, 630.0], [85.0, 632.0], [85.1, 632.0], [85.2, 633.0], [85.3, 635.0], [85.4, 636.0], [85.5, 636.0], [85.6, 637.0], [85.7, 637.0], [85.8, 638.0], [85.9, 638.0], [86.0, 639.0], [86.1, 640.0], [86.2, 641.0], [86.3, 642.0], [86.4, 644.0], [86.5, 644.0], [86.6, 644.0], [86.7, 645.0], [86.8, 645.0], [86.9, 646.0], [87.0, 647.0], [87.1, 648.0], [87.2, 649.0], [87.3, 650.0], [87.4, 650.0], [87.5, 652.0], [87.6, 653.0], [87.7, 653.0], [87.8, 654.0], [87.9, 655.0], [88.0, 658.0], [88.1, 659.0], [88.2, 659.0], [88.3, 659.0], [88.4, 660.0], [88.5, 660.0], [88.6, 660.0], [88.7, 661.0], [88.8, 662.0], [88.9, 663.0], [89.0, 664.0], [89.1, 664.0], [89.2, 666.0], [89.3, 666.0], [89.4, 666.0], [89.5, 668.0], [89.6, 669.0], [89.7, 670.0], [89.8, 670.0], [89.9, 670.0], [90.0, 672.0], [90.1, 672.0], [90.2, 674.0], [90.3, 674.0], [90.4, 678.0], [90.5, 679.0], [90.6, 680.0], [90.7, 680.0], [90.8, 682.0], [90.9, 682.0], [91.0, 683.0], [91.1, 684.0], [91.2, 684.0], [91.3, 685.0], [91.4, 685.0], [91.5, 690.0], [91.6, 692.0], [91.7, 694.0], [91.8, 694.0], [91.9, 695.0], [92.0, 695.0], [92.1, 695.0], [92.2, 696.0], [92.3, 697.0], [92.4, 699.0], [92.5, 701.0], [92.6, 701.0], [92.7, 703.0], [92.8, 705.0], [92.9, 707.0], [93.0, 708.0], [93.1, 708.0], [93.2, 711.0], [93.3, 714.0], [93.4, 716.0], [93.5, 717.0], [93.6, 725.0], [93.7, 728.0], [93.8, 730.0], [93.9, 745.0], [94.0, 748.0], [94.1, 748.0], [94.2, 750.0], [94.3, 754.0], [94.4, 756.0], [94.5, 757.0], [94.6, 757.0], [94.7, 759.0], [94.8, 759.0], [94.9, 764.0], [95.0, 764.0], [95.1, 766.0], [95.2, 768.0], [95.3, 770.0], [95.4, 773.0], [95.5, 774.0], [95.6, 775.0], [95.7, 775.0], [95.8, 776.0], [95.9, 776.0], [96.0, 776.0], [96.1, 780.0], [96.2, 782.0], [96.3, 782.0], [96.4, 783.0], [96.5, 787.0], [96.6, 790.0], [96.7, 790.0], [96.8, 793.0], [96.9, 796.0], [97.0, 796.0], [97.1, 810.0], [97.2, 816.0], [97.3, 825.0], [97.4, 839.0], [97.5, 913.0], [97.6, 939.0], [97.7, 1071.0], [97.8, 1088.0], [97.9, 1089.0], [98.0, 1091.0], [98.1, 1097.0], [98.2, 1102.0], [98.3, 1105.0], [98.4, 1105.0], [98.5, 1126.0], [98.6, 1150.0], [98.7, 1167.0], [98.8, 1208.0], [98.9, 1252.0], [99.0, 1273.0], [99.1, 1300.0], [99.2, 1307.0], [99.3, 1309.0], [99.4, 1311.0], [99.5, 1321.0], [99.6, 1321.0], [99.7, 1330.0], [99.8, 1349.0], [99.9, 1386.0]], "isOverall": false, "label": "Journey_list_request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 500.0, "maxY": 685.0, "series": [{"data": [[1100.0, 6.0], [600.0, 240.0], [1200.0, 3.0], [1300.0, 9.0], [700.0, 46.0], [800.0, 4.0], [900.0, 2.0], [500.0, 685.0], [1000.0, 5.0]], "isOverall": false, "label": "Journey_list_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.542735042735044, "minX": 1.77158052E12, "maxY": 11.336814621409928, "series": [{"data": [[1.77158058E12, 11.336814621409928], [1.77158052E12, 10.542735042735044]], "isOverall": false, "label": "Journey-list", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158058E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 595.4545454545455, "minX": 1.0, "maxY": 777.6666666666667, "series": [{"data": [[2.0, 777.6666666666667], [8.0, 595.4545454545455], [9.0, 629.6666666666669], [10.0, 615.28125], [11.0, 613.8742138364778], [3.0, 611.1250000000001], [12.0, 609.5061224489797], [13.0, 606.3435582822082], [14.0, 611.9], [4.0, 702.3], [1.0, 613.5], [5.0, 642.6842105263158], [6.0, 628.1578947368423], [7.0, 600.2000000000002]], "isOverall": false, "label": "Journey_list_request", "isController": false}, {"data": [[11.151000000000002, 612.8530000000002]], "isOverall": false, "label": "Journey_list_request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 951.6, "minX": 1.77158052E12, "maxY": 9689.9, "series": [{"data": [[1.77158058E12, 9689.9], [1.77158052E12, 2960.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77158058E12, 3115.0666666666666], [1.77158052E12, 951.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158058E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 604.6201044386418, "minX": 1.77158052E12, "maxY": 639.8034188034187, "series": [{"data": [[1.77158058E12, 604.6201044386418], [1.77158052E12, 639.8034188034187]], "isOverall": false, "label": "Journey_list_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158058E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 603.6762402088779, "minX": 1.77158052E12, "maxY": 638.2606837606836, "series": [{"data": [[1.77158058E12, 603.6762402088779], [1.77158052E12, 638.2606837606836]], "isOverall": false, "label": "Journey_list_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158058E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.509138381201049, "minX": 1.77158052E12, "maxY": 14.47863247863248, "series": [{"data": [[1.77158058E12, 7.509138381201049], [1.77158052E12, 14.47863247863248]], "isOverall": false, "label": "Journey_list_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158058E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 524.0, "minX": 1.77158052E12, "maxY": 1386.0, "series": [{"data": [[1.77158058E12, 1309.0], [1.77158052E12, 1386.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77158058E12, 524.0], [1.77158052E12, 526.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77158058E12, 658.3000000000001], [1.77158052E12, 746.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77158058E12, 1099.6400000000003], [1.77158052E12, 1342.3500000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77158058E12, 588.0], [1.77158052E12, 589.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77158058E12, 729.3], [1.77158052E12, 1093.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158058E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 578.0, "minX": 2.0, "maxY": 615.0, "series": [{"data": [[8.0, 604.5], [2.0, 613.5], [9.0, 597.5], [10.0, 600.5], [3.0, 615.0], [12.0, 586.0], [13.0, 587.0], [14.0, 593.0], [16.0, 585.5], [17.0, 592.5], [18.0, 593.0], [19.0, 591.0], [20.0, 585.5], [5.0, 587.0], [21.0, 583.0], [22.0, 584.0], [23.0, 578.0], [6.0, 598.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 575.0, "minX": 2.0, "maxY": 615.0, "series": [{"data": [[8.0, 604.5], [2.0, 613.5], [9.0, 597.0], [10.0, 599.5], [3.0, 615.0], [12.0, 586.0], [13.0, 586.0], [14.0, 593.0], [16.0, 585.5], [17.0, 591.5], [18.0, 592.5], [19.0, 590.0], [20.0, 585.0], [5.0, 587.0], [21.0, 582.0], [22.0, 584.0], [23.0, 575.0], [6.0, 597.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.1, "minX": 1.77158052E12, "maxY": 12.566666666666666, "series": [{"data": [[1.77158058E12, 12.566666666666666], [1.77158052E12, 4.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158058E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.9, "minX": 1.77158052E12, "maxY": 12.766666666666667, "series": [{"data": [[1.77158058E12, 12.766666666666667], [1.77158052E12, 3.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77158058E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.9, "minX": 1.77158052E12, "maxY": 12.766666666666667, "series": [{"data": [[1.77158058E12, 12.766666666666667], [1.77158052E12, 3.9]], "isOverall": false, "label": "Journey_list_request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158058E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.9, "minX": 1.77158052E12, "maxY": 12.766666666666667, "series": [{"data": [[1.77158058E12, 12.766666666666667], [1.77158052E12, 3.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77158058E12, "title": "Total Transactions Per Second"}},
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


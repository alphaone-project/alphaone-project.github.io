
//Formatter to generate charts
var chartFormatter = function (cell, formatterParams, onRendered) {
    var content = document.createElement("span");
    var values = cell.getValue();

    //invert values if needed
    if (formatterParams.invert) {
        values = values.map(val => val * -1);
    }

    //add values to chart and style
    content.classList.add(formatterParams.type);
    content.inneHrTML = values.join(",");

    //setup chart options
    var options = {
        width: 50,
        // min: 0.0,
        // max: 100.0,
    }

    if (formatterParams.fill) {
        options.fill = formatterParams.fill
    }

    //instantiate piety chart after the cell element has been aded to the DOM
    onRendered(function () {
        peity(content, formatterParams.type, options);
    });

    return content;
};

var colorFormatterGoalInt = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterSubgoal = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 232, b: 221 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterActionSeq = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterTrans = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 0.0,
        max: 100.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}



var barColorFn = function (value, formatterParams) {
    var defaults = {
        range : [-50, 50],
        low: { r: 255, g: 255, b: 255 },
        high: { r: 206, g: 212, b: 218 }
    };

    // Override defaults with provided formatterParams values

    var low_range = (formatterParams && formatterParams.range[0]) || defaults.range[0];
    var high_range = (formatterParams && formatterParams.range[1]) || defaults.range[1];
    var low = (formatterParams && formatterParams.low) || defaults.low;
    var high = (formatterParams && formatterParams.high) || defaults.high;

    // Clamp the value to the range [-100, 100]
    value = Math.max(low_range, Math.min(high_range, value));
    var range = high_range - low_range;

    // Normalize the value to the range [0, 1]
    var normalizedValue = (value + range / 2) / range;
    // Interpolate between the two colors based on the normalized value
    var interpolated = {
        r: Math.floor(low.r + (high.r - low.r) * normalizedValue),
        g: Math.floor(low.g + (high.g - low.g) * normalizedValue),
        b: Math.floor(low.b + (high.b - low.b) * normalizedValue)
    };

    return 'rgba(' + interpolated.r + ',' + interpolated.g + ',' + interpolated.b + ',0.9)';
}

document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        fetch('website/data/eb_navigation_total_benchmark.json').then(response => response.json()),
        fetch('website/data/eb_manipulation_total_benchmark.json').then(response => response.json()),
    ])
        .then(([
            eb_navigation_total_benchmark_data,
            eb_manipulation_total_benchmark_data,
        ]) => {
            var getColumnMinMax = (data, field) => {
                let values = data.map(item => item[field]).filter(val => val !== "-").map(Number);
                return { min: Math.min(...values), max: Math.max(...values) };
            };

            var eb_navigation_columns = [
                {
                    title: "Model",
                    field: "model",
                    widthGrow: 1.5,
                    minWidth: 180,
                    headerSort: true 
                },
                {
                    title: "Avg<br>Perf.",
                    field: "eb_nav_avg",
                    formatter: "progress",
                    minWidth: 90,
                    formatterParams: {
                        min: 0,
                        max: 100,
                        legend: true,
                        color: barColorFn
                    }
                },
                {
                    title: "Base",
                    field: "eb_nav_base",
                    hozAlign: "center",
                    minWidth: 90,
                    headerSort: true,
                    formatter: colorFormatterSubgoal
                },
                {
                    title: "Common",
                    field: "eb_nav_common",
                    hozAlign: "center",
                    minWidth: 90,
                    headerSort: true,
                    formatter: colorFormatterActionSeq
                },
                {
                    title: "Complex",
                    field: "eb_nav_complex",
                    hozAlign: "center",
                    minWidth: 90,
                    headerSort: true,
                    formatter: colorFormatterTrans
                },
                {
                    title: "Visual",
                    field: "eb_nav_visual",
                    hozAlign: "center",
                    minWidth: 90,
                    headerSort: true,
                    formatter: colorFormatterGoalInt
                },
                {
                    title: "Long",
                    field: "eb_nav_long",
                    hozAlign: "center",
                    minWidth: 90,
                    headerSort: true,
                    formatter: colorFormatterSubgoal
                }
            ];

            eb_navigation_columns.forEach(column => {
                if (column.columns) {
                    column.columns.forEach(subColumn => {
                        let { min, max } = getColumnMinMax(eb_navigation_total_benchmark_data, subColumn.field);
                        subColumn.formatterParams = { min, max };
                    });
                } else if (column.field !== "eb_nav_avg") {
                    let { min, max } = getColumnMinMax(eb_navigation_total_benchmark_data, column.field);
                    column.formatterParams = { min, max };
                }
            });

            var eb_navigation_table = new Tabulator("#eb-navigation-benchmark-main-table", {
                data: eb_navigation_total_benchmark_data,
                layout: "fitColumns",
                responsiveLayout: "collapse",
                responsiveLayoutCollapseStartOpen: false,
                movableColumns: false,
                initialSort: [
                    { column: "eb_nav_avg", dir: "desc" },
                ],
                columnDefaults: {
                    tooltip: true,
                },
                // columns: eb_navigation_columns
                columns: eb_navigation_columns.map(column => {
                    if (column.field === "eb_nav_avg") {
                        return { ...column, sorter: "number" };
                    }
                    return column;
                })
            });

            var eb_manipulation_columns = [
                {
                    title: "Model",
                    field: "model",
                    widthGrow: 1.5,
                    minWidth: 180,
                    headerSort: true
                },
                {
                    title: "Avg<br>Perf.",
                    field: "eb_mani_avg",
                    formatter: "progress",
                    minWidth: 90,
                    formatterParams: {
                        min: -2, max: 80,
                        legend: true,
                        color: barColorFn,
                    },
                },
                {
                    title: "Base",
                    field: "eb_mani_base",
                    hozAlign: "center",
                    minWidth: 100,
                    headerSort: true,
                    formatter: colorFormatterSubgoal
                },
                {
                    title: "Common",
                    field: "eb_mani_common",
                    hozAlign: "center",
                    minWidth: 100,
                    headerSort: true,
                    formatter: colorFormatterActionSeq
                },
                {
                    title: "Complex",
                    field: "eb_mani_complex",
                    hozAlign: "center",
                    minWidth: 100,
                    headerSort: true,
                    formatter: colorFormatterTrans
                },
                {
                    title: "Visual",
                    field: "eb_mani_visual",
                    hozAlign: "center",
                    minWidth: 100,
                    headerSort: true,
                    formatter: colorFormatterGoalInt
                },
                {
                    title: "Spatial",
                    field: "eb_mani_spatial",
                    hozAlign: "center",
                    minWidth: 100,
                    headerSort: true,
                    formatter: colorFormatterSubgoal
                },
            ];

            eb_manipulation_columns.forEach(column => {
                if (column.columns) {
                    column.columns.forEach(subColumn => {
                        let { min, max } = getColumnMinMax(eb_manipulation_total_benchmark_data, subColumn.field);
                        subColumn.formatterParams = { min, max };
                    });
                } else if (column.field !== "eb_mani_avg") {
                    let { min, max } = getColumnMinMax(eb_manipulation_total_benchmark_data, column.field);
                    column.formatterParams = { min, max };
                }
            });

            var eb_manipulation_table = new Tabulator("#eb-manipulation-benchmark-main-table", {
                data: eb_manipulation_total_benchmark_data,
                layout: "fitColumns",
                responsiveLayout: "collapse",
                responsiveLayoutCollapseStartOpen: false,
                movableColumns: false,
                initialSort: [
                    { column: "eb_mani_avg", dir: "desc" },
                ],
                columnDefaults: {
                    tooltip: true,
                },
                // columns: eb_manipulation_columns
                columns: eb_manipulation_columns.map(column => {
                    if (column.field === "eb_mani_avg") {
                        return { ...column, sorter: "number" };
                    }
                    return column;
                })
            });
        });
})


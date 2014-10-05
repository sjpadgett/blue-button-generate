module.exports = [{
    "value": "//*[@nullFlavor]"
}, {
    "value": "//h:text"
}, {
    "value": "//h:effectiveTime[@xsi:type=\"IVL_TS\"]",
    "action": "A",
    "params": "type"
}, {
    "value": "//h:reference"
}, {
    "value": "//h:originalText"
}, {
    "value": "//h:text",
    "action": "W"
}, {
    "value": ["2.16.840.1.113883.10.20.22.2.6", "2.16.840.1.113883.10.20.22.2.6.1"],
    "xpathcmt": "Allergies Section (entries optional)",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.1",
    "xpathcmt": "Medications Section (entries optional)",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.2",
    "xpathcmt": "Immunization Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }, {
        "value": "2.16.840.1.113883.10.20.22.4.52",
        "xpathcmt": "Immunization Activity",
        "type": "T",
        "subPathSpecs": [{
            "value": "2.16.840.1.113883.10.20.22.4.20",
            "xpathcmt": "Instructions",
            "type": "T",
            "subPathSpecs": [{
                "value": "..",
                "action": "A",
                "params": "inversionInd"
            }]
        }]
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.7",
    "xpathcmt": "Procedures Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }, {
        "value": "2.16.840.1.113883.10.20.22.4.12",
        "xpathcmt": "Procedure Actitivity Act",
        "type": "T",
        "subPathSpecs": [{
            "value": ".",
            "action": "A",
            "params": "moodCode"
        }]
    }, {
        "value": "2.16.840.1.113883.10.20.22.4.13",
        "xpathcmt": "Procedure Actitivity Observation",
        "type": "T",
        "subPathSpecs": [{
            "value": ".",
            "action": "A",
            "params": "moodCode"
        }]
    }, {
        "value": "2.16.840.1.113883.10.20.22.4.14",
        "xpathcmt": "Procedure Actitivity Procedure",
        "type": "T",
        "subPathSpecs": [{
            "value": ".",
            "action": "A",
            "params": "moodCode"
        }]
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.22",
    "xpathcmt": "Encounters Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.18",
    "xpathcmt": "Payers Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }, {
        "value": ".//h:time"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.10",
    "xpathcmt": "Plan Of Care Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.5",
    "xpathcmt": "Problems",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.17",
    "xpathcmt": "Social History Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.4",
    "xpathcmt": "Vital Signs Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }, {
        "value": "..",
        "action": "ADD",
        "params": "2.16.840.1.113883.10.20.22.4.27"
    }, {
        "value": "h:entry"
    }]
}, {
    "value": "2.16.840.1.113883.10.20.22.2.3",
    "xpathcmt": "Results Section",
    "type": "TR",
    "subPathSpecs": [{
        "value": "h:text"
    }]
}];
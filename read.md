# Manual Test Scenarios

## **Feature**: Restrict access when bypass by console script

### **Background**: 
**Given** the user is logged into the system 

**And** the user's current role is 'XPTO' 

**And** the user opened the browser console (F12) and entered the following 
script: 

    let data = JSON.parse(localStorage.getItem("monument_value"))
    if (data.permissions && data.permissions.units) {
      for (const key in data.permissions.units) {
        data.permissions.units[key] = true;
      }
    }
    
    localStorage.setItem("monument_value", JSON.stringify(data));
    console.log("Updated permissions.units:", data.permissions.units);
    
**Then** the console displayed the message:

    Updated permissions.units: {canEdit: true, canView: true, canCreate: true, canDelete: true}


## **Scenario 01**: User should not have access to the Units feature after try bypass

**And** the user navigates to the Units URL 

    https://automatedtests.stg.monument.io/units
**Then** the user should not be able to see the units list

**And** the user should not be able to create a new unit 

<br>
<br>

# Automatized Test Scenarios

### **Background**: 
**Given** the user's current role is 'XPTO' 

**And** the role only provides access to Leads feature

**And** the user is logged into the system 



## **Scenario 01**: User with Leads access cannot access Units and sees an error message

**When** the user navigates to the Units URL 

    https://automatedtests.stg.monument.io/units
**Then** the user should see the error message:

    You don’t have permissions to view this page

**And** the user should see the message:

    Reach out to administrator to get access to this page.
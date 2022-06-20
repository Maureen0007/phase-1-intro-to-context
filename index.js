// Your code here
function createEmployeeRecord(employees){
    return{
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour:employees[3],
        timeInEvents:[],
        timeOutEvents:[]
    
    }
    
    }
    
    
function createTimeInEvent(empRecord, dateStamp){

        const [date, hour] = dateStamp.split(' ')
    
        empRecord.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date,
        })
    
        return empRecord
    }    


function  createTimeOutEvent(empRecord, dateStamp){
        let [date, hour] = dateStamp.split(' ')
    
        empRecord.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date,
        })
    
        return empRecord
    }  
    
    
function hoursWorkedOnDate(emp, dates) {
        let timeIn = emp.timeInEvents.find(event =>
            event.date == dates)
        let timeOut = emp.timeOutEvents.find(event =>
            event.date == dates)
        let totalTime = (timeOut.hour - timeIn.hour) / 100
        return totalTime;
      }
function wagesEarnedOnDate(emp, dates) {
        let hours = hoursWorkedOnDate(emp, dates)
        return emp.payPerHour * hours;
      }    
function allWagesFor(emp) {
        return emp.timeInEvents.reduce((total, event) => {
            return total + wagesEarnedOnDate(emp, event.date)
        }, 0)
      }     

function calculatePayroll(employeeRecord) {
        return employeeRecord.reduce((total, employee) => {
            return total + allWagesFor(employee)
        }, 0)
      }
    
function createEmployeeRecords(array){

        return array.map((records) =>{
            return  createEmployeeRecord(records)
        })
    
    }

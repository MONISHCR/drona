import React, { useState } from "react";

const AttendanceScreen11 = ({ navigation }) => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [absentees, setAbsentees] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rollNumbers = [
    '01', '04', '06', '08', '0A', '0B', '0D', '0E', '0G', '0H', '0J', '0K', '0L', '0M', '0P', '0R', '0V', '0W', '0Z',
    '13', '17', '1B', '1G', '1J', '1K', '1M', '1T', '1V', '1Y', '21', '2A', '2D', '2F', '2G', '2H', '2K', '2P', '2X',
    '33', '3G', '3K', '3L', '3N', '3T', '42', '4G', '4H', '51', '52', '57', '59', '5B', 'K2', 'LE-5', '05', '07', 
    '0F','0N', '0U', '0Y', '11', '12', '18', '1A', '1C', '1F', '1H', '1L', '1Q', '1U', '1Z', '2B', '2L', '2Q', '2V',
    '31','35', '3E', '3U', '4J', '5N', 'LE-1'

  ];

  const teachers = [
    {
      name: "ARSHIYA MA'AM",
      phoneNumber: '+919640780914',
    },
    {
      name: "SRINIVAS SIR",
      phoneNumber: '+919866870184',
    },
    {
      name: "ANURADHA MA'AM",
      phoneNumber: '+919949261738',
    },
    {
        name: "VIJETHA MA'AM",
        phoneNumber: '+919440167315',
    },
    {
        name: "DEVI MA'AM",
        phoneNumber: '+919916192907',
    },
    {
        name: "PANDYA NAIK SIR",
        phoneNumber: '+917661975546',
    },
    {
        name: "SRIKAR SIR",
        phoneNumber: '+917989465549',
    },

    // Add more teachers as needed
  ];

  const markAttendance = (rollNumber) => {
    if (attendanceList.includes(rollNumber)) {
      setAttendanceList(attendanceList.filter((item) => item !== rollNumber));
    } else {
      setAttendanceList([...attendanceList, rollNumber]);
    }
  };

  const submitAttendance = () => {
    const absentStudents = rollNumbers.filter((rollNumber) => !attendanceList.includes(rollNumber));
    setAbsentees(absentStudents);
    setIsSubmitted(true);
  };

  const copyToClipboard = () => {
    const absenteesString = absentees.join(", ");
    navigator.clipboard.writeText(absenteesString);
    alert("Absentees copied to clipboard!");
  };

  const sendToWhatsApp = (name, phoneNumber) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting;
  
    if (hours >= 5 && hours < 12) {
      greeting = "Good morning";
    } else if (hours >= 12 && hours < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  
    const formattedDate = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
  
    const teacherTitle = name.includes("SIR") ? "Sir Elite & A1 Attendance " : "Ma'am Elite & A1 Attendance ";
    const presenteesString = attendanceList.length > 0 ? `Presentees: ${attendanceList.join(", ")}` : "All present";
    const absenteesString = absentees.length > 0 ? `Absentees: ${absentees.join(", ")}` : "No absentees";
  
    const message = `${greeting}, ${teacherTitle} on ${formattedDate}!\n\n${presenteesString}\n${absenteesString}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  

//   const handleLogout = () => {
//     if (isSubmitted) {
//       setIsSubmitted(false);
//       setAttendanceList([]);
//       setAbsentees([]);
//     }

//     navigation.navigate("LoginScreen");
//   };

//   const Refresh = () => {
//     if (isSubmitted) {
//       setIsSubmitted(false);
//       setAttendanceList([]);
//       setAbsentees([]);
//     }

//     navigation.navigate("AttendanceScreen11");
//   };

  const updateAttendance = () => {
    const presentees = attendanceList.join(", ");
    const absenteesString = absentees.join(", ");

    const message = `Presentees: ${presentees}\nAbsentees: ${absenteesString}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=+917032338726&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    rollNumberContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: "20px",
    },
    rollNumber: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      margin: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
    },
    submitButton: {
      backgroundColor: "darkblue",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      marginBottom: "20px",
      width: "100%",
      maxWidth: "300px",
    },
    teacherButton: {
      backgroundColor: "#BFE6FF",
      color: "black",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
      width: "100%",
      maxWidth: "300px",
    },
    logoutButton: {
      backgroundColor: "#ECECEC",
      color: "black",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      marginRight: "10px",
      width: "100%",
      maxWidth: "300px",
    },
    backButton: {
      backgroundColor: "#ECECEC",
      color: "black",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      width: "100%",
      maxWidth: "300px",
    },
  };

  return (
    <div style={styles.container}>
      

      <h1 style={styles.header}>Mark Attendance</h1>

      <div style={styles.rollNumberContainer}>
        {rollNumbers.map((rollNumber) => (
          <button
            key={rollNumber}
            onClick={() => markAttendance(rollNumber)}
            style={{
              ...styles.rollNumber,
              backgroundColor: attendanceList.includes(rollNumber) ? "green" : "red"
            }}
          >
            {rollNumber}
          </button>
        ))}
      </div>

      <button onClick={submitAttendance} style={styles.submitButton}>
        Submit
      </button>

      {isSubmitted && attendanceList.length > 0 && (
        <div>
          <h2>Presentees:</h2>
          <p>{attendanceList.join(", ")}</p>
        </div>
      )}

      {isSubmitted && absentees.length > 0 && (
        <div>
          <h2>Absentees:</h2>
          <p>{absentees.join(", ")}</p>
          <button onClick={copyToClipboard}>Copy to Clipboard</button>

          {teachers.map((teacher, index) => (
            <button
              key={index}
              onClick={() => sendToWhatsApp(teacher.name, teacher.phoneNumber)}
              style={styles.teacherButton}
            >
              Send to {teacher.name}
            </button>
          ))}
        </div>
      )}

      {isSubmitted && (
        <button onClick={updateAttendance} style={styles.submitButton}>
          Update Attendance
        </button>
      )}
    </div>
  );
};

export default AttendanceScreen11;

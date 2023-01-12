import { Container } from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from "@mui/lab";
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import { Typography } from "@mui/material";

export default function About() {

    const handleTimelineHover = e => {
        e.target.parentNode.style.color = "blue";
    }

    const handleTimeLineExit = e => {
        e.target.parentNode.style.color = "";
    }


    return (
        <Container sx={{ justifyContent: "center", textAlign: "center" }}>
            <h1>Welcome!</h1>

            <Typography component="p">
                My name is Matt LeBlanc, and I have been a Production Software Enginner for 3 years now. I went to college at the Univesity of Massachusetts Lowell. In my current position I work a lot with SQL, and reporting software like Tableau and SAP Business Objects. We also have apis that our clients and us use to build out applications, and retrieve data.
                If you have any questions, please let me know via the contact information in the about page, and if you are curious I have my past projects listed in the Projects tab of this site!
            </Typography>

            <h2 sx={{ paddingTop: "5vh" }}>Work History</h2>
            <Timeline>
                <TimelineItem onMouseOver={handleTimelineHover} onMouseOut={handleTimeLineExit}>
                    <TimelineOppositeContent>
                        2020 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Associate Software Enginner I at Oracle Cerner</TimelineContent>
                </TimelineItem>
                <TimelineItem onMouseOver={handleTimelineHover} onMouseOut={handleTimeLineExit}>
                    <TimelineOppositeContent>
                        2018 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Software Developer at the University of Massachusetts Lowell</TimelineContent>
                </TimelineItem>
                <TimelineItem onMouseOver={handleTimelineHover} onMouseOut={handleTimeLineExit}>
                    <TimelineOppositeContent>
                        2015 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <SchoolIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>Student at the University of Massachusetts Lowell</TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    );
}
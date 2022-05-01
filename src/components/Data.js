import React, { useState, useEffect } from 'react'
import "../css/data.css"
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SyncIcon from '@mui/icons-material/Sync';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';


function Data(props) {

    return(
        <>
        <div className="data">
            <div className="data__header">
                <div className="data__headerLeft">
                    <div className="active_dataHeader">
                        <div className="inner">
                        <CloudQueueIcon />
                        <span>Permissions</span>
                        </div>
                    </div>
                    <CalendarViewMonthIcon />
                    <span>Approval Matrix</span>
                </div>
                <div className="data__headerRight">
                    <SyncIcon />
                    <span>Last synced 15 minutes ago</span>
                </div>
            </div>
            <div className="data__content">
                <div className="FolderHeading">
                    <div id="leftArrow">
                    <ArrowBackIcon />
                    </div>
                    <span>Teachers</span>
                    <div id="edit">
                    <EditIcon />
                    </div>
                    </div>
                <div className="data_list">
                    <div className="data_list_header">
                        <span id="active">Access Control</span>
                        <span id="line"></span>
                        <span id="assigned">Assigned Members</span>
                    </div><br></br>
                    <div className="detailsrow">
                        <span id="depname">Department/Role Name</span>
                        <span>Access Level</span>
                        <span>Summary</span>
                        <span>Last Updated</span>
                        <span></span>
                    </div>
                    <div id="row">
                        <AddCircleOutlineIcon />
                        <span>Enrolling Students</span>
                        <span><button className="Root-Btn_green">All Access</button></span>
                        <span>View | Create | Edit | Delete</span>
                        <span>1 min ago</span>
                        <ToggleOnIcon />
                    </div>
                    <div id="row1">
                        <RemoveCircleOutlineIcon />
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>1 min ago</span>
                        <ToggleOffIcon /><br></br>
                    </div>
                    <div id="controls">
                        <div id="leftControls"></div>
                        <div id="rightControls"></div>
                        </div>
                    <div id="row">
                        <AddCircleOutlineIcon />
                        <span>Furniture Order</span>
                        <span><button className="Root-Btn_red">Restricted Access</button></span>
                        <span>View | Create</span>
                        <span>1 min ago</span>
                        <ToggleOnIcon />
                    </div>
                    <div id="row">
                        <AddCircleOutlineIcon />
                        <span>Permission Clearance</span>
                        <span><button className="Root-Btn_green">All Access</button></span>
                        <span>View | Create | Edit | Delete</span>
                        <span>1 min ago</span>
                        <ToggleOnIcon />
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Data

import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const menuItems = [
        {
            title: "MENU",
            items: [
                {
                    icon: "/home.png",
                    label: "Home",
                    href: "/",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/teacher.png",
                    label: "Teachers",
                    href: "/list/teachers",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/student.png",
                    label: "Students",
                    href: "/list/students",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/parent.png",
                    label: "Parents",
                    href: "/list/parents",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/subject.png",
                    label: "Subjects",
                    href: "/list/subjects",
                    visible: ["admin"],
                },
                {
                    icon: "/class.png",
                    label: "Classes",
                    href: "/list/classes",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/lesson.png",
                    label: "Lessons",
                    href: "/list/lessons",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/exam.png",
                    label: "Exams",
                    href: "/list/exams",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/assignment.png",
                    label: "Assignments",
                    href: "/list/assignments",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/result.png",
                    label: "Results",
                    href: "/list/results",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/attendance.png",
                    label: "Attendance",
                    href: "/list/attendance",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/calendar.png",
                    label: "Events",
                    href: "/list/events",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/message.png",
                    label: "Messages",
                    href: "/list/messages",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/announcement.png",
                    label: "Announcements",
                    href: "/list/announcements",
                    visible: ["admin", "teacher", "student", "parent"],
                },
            ],
        },
        {
            title: "OTHER",
            items: [
                {
                    icon: "/profile.png",
                    label: "Profile",
                    href: "/profile",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/setting.png",
                    label: "Settings",
                    href: "/settings",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/logout.png",
                    label: "Logout",
                    href: "/logout",
                    visible: ["admin", "teacher", "student", "parent"],
                },
            ],
        },
    ];
    return (
        <div className='h-full p-4  w-52 '>
            <p className='text-zinc-700 font-bold py-3 text-center'>Dashboard</p>
            <div>
                {
                    menuItems.map((item,index) => (
                        <div key={index}>
                            <p className='text-sm pt-2 text-zinc-700'>{item.title}</p>
                            <div >
                                {
                                    item.items.map((inner_items,index) => (
                                        <div key={index} className='py-1'>
                                            {/* <img src={inner_items.icon}></img> */}
                                            <Link to={inner_items.href} className='pl-4 text-xs text-zinc-500'>{inner_items.label}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { selectAuthState, setLogout } from "@/store/slices/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";

export default function ModalProfile({ showprofile, setShowProfile }: any) {
    const dispatch = useDispatch();
    const { authenticated, profile } = useSelector(selectAuthState);
    const [showDashboar, setShowDashboar] = useState(false);
    const router = useRouter();

    const authOptions: any = [
        { label: "Cerrar sesion", path: "/", onClick: () => dispatch(setLogout()) },
        { label: "Profile", path: "/", onClick: () => router.push("/dashboard") },
    ];

    return (
        <>
            {showprofile && (

                <div className='container-Profile me-0 me-md-1 rounded-3 shadow p-0  p-md-2'>

                    {authOptions.map((Options: any, index: number) => (
                        <p
                            key={index}
                            className=" mx-2 mx-md-3 my-2 "
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setShowProfile(false)
                                Options.onClick ? Options.onClick() : router.push(Options.path)
                            }
                            }
                        >
                            {Options.Icon ? (
                                <div className="position-relative ">
                                    <div className="notification-active">{ }</div>
                                    <Options.Icon className=" size-icon m-0" />
                                </div>
                            ) : (
                                Options.label
                            )}
                        </p>
                    ))}
                </div>

            )}
        </>

    )
}

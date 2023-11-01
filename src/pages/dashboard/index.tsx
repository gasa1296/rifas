import Layout from '@/components/Layout'
import React from 'react'
import Dashboard from "@/components/Dashboard"
import DashboardAsociation from '@/components/Dashboard/DashboardAsociation'

export default function dashboard() {
    return (
        <Layout>
            <DashboardAsociation />
        </Layout>
    )
}

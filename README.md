# EcoMunity IoT System Hub

A live web dashboard for the EcoMunity Club's IoT, an environmental technology project designed to make EcoMunity campus cleanup events smarter, more organized, and more data-driven.

The dashboard visualizes cleanup activity on an interactive map by displaying GPS points logged from a button-based wearable trash logger. The broader system is designed to include an ESP32-powered Eco-Watch, a GPS-tracked cleanup wagon, and a web dashboard for viewing cleanup sessions, trash hotspots, and long-term impact data.

## Project Summary

EcoMunity already has real community impact, with members meeting almost every Sunday to clean trash around campus. However, after each cleanup ends, most of that work becomes invisible. Trash is removed, but there is usually no lasting data showing:

- where trash was found
- which areas of campus have the most waste
- how often certain hotspots reappear
- how much work the club does over time
- where cleanup resources, such as bins or signs, may be needed most

The EcoMunity IoT System solves this by turning normal cleanup events into data-gathering environmental sensing sessions.

Instead of only picking up trash, volunteers can collect GPS-based cleanup data that helps identify campus trash hotspots, track cleanup activity, and create visual proof of EcoMunity’s environmental impact.

## Core Features

Current and planned dashboard features include:

- Interactive cleanup map using Leaflet
- Red map markers for trash log locations
- Supabase database integration
- API endpoint for receiving trash logs from hardware
- Live or periodically refreshed cleanup data
- Cleanup session support
- Device tracking for Eco-Watches and wagon GPS modules
- Impact statistics and cleanup summaries
- Data export for reports and presentations
- Future support for wagon GPS location tracking

## System Overview

The complete EcoMunity IoT system is designed around three main components:

### 1. Web Dashboard

The web dashboard is the central visualization tool. It displays cleanup data on a map, summarizes activity, and helps EcoMunity turn cleanup work into measurable environmental impact.

### 2. Eco-Watch Trash Logger

A wearable GPS device built with an ESP32, GPS module, large button, and battery. When a volunteer finds and picks up trash, they press the button. The device records the GPS location and sends it to the web app/database. The goal is to let volunteers log trash locations without needing to pull out a phone during cleanup.

### 3. RC Rover Wagon + Tracker

The project is planned to include a cleanup wagon that carries supplies and collected trash. The wagon can broadcast its GPS location to the dashboard so volunteers can see where it is during a cleanup event.

## Significance

The data collected by this system can be used to:

- identify consistent trash hotspots across campus
- show where more trash or recycling bins are needed
- support funding requests with real cleanup data
- track cleanup impact over time by session, week, or month
- measure trends, including recurring problem areas or seasonal changes
- improve cleanup route planning
- create visual reports and maps for presentations, outreach, or school administration
- document EcoMunity’s impact in a clear and credible way

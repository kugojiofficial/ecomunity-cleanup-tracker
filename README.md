# EcoMunity Cleanup Tracker

A mobile app and web dashboard for EcoMunity, a school club that runs community cleanup sessions around campus. The system turns ordinary cleanup events into organized, data-driven environmental surveys, so the club can see where trash was found, which spots keep coming back as problems, and where campus actually needs more bins or signage.

## Project Summary

EcoMunity members meet almost every Sunday to clean trash around campus, but afterward, most of that work goes unrecorded. Trash gets removed, yet there's usually no lasting data showing where it was found, which areas repeatedly show up as problems, how cleanup activity changes over time, or where more trash cans, recycling bins, or signs might help most.

This project fixes that. Instead of just picking up trash, volunteers log it through their phones, and every verified entry becomes part of a growing dataset the club can use to prove its impact and plan smarter cleanups.

## Core Features

- Photo-based trash logging through a mobile app
- Session grouping, so all logs from one cleanup event stay together
- YOLO computer vision model that detects trash in submitted photos, including multiple items per photo
- Second-pass AI validation at the end of each session, flagging non-trash entries and catching duplicates
- Point reward system for verified logs, with a cooldown between entries to prevent spam
- Interactive cleanup map built with Leaflet, showing markers for each logged location
- Heatmap views that surface trash hotspots across campus
- Supabase database backing the whole system, with an API endpoint for receiving logs from the app
- Per-session statistics, including log counts, verified entries, and top areas
- Data export for reports, presentations, and requests to school administration

## How It Works

During a cleanup, a student finds trash, presses a Log Trash button in the app, and takes a photo of what they collected. That photo attaches to the entry as proof, so the data holds up better than a button press or a rough headcount. The app is meant to be used with a protective phone cover since hands get dirty during cleanups, which also means no separate wearable device is needed. Students just use the phones they already carry.

Each log gets sent through an API to a Supabase database. From there, the YOLO model checks whether trash actually appears in the photo and can pick out multiple items in a single shot. At the end of the session, a second AI pass reviews the batch, flagging anything that isn't real trash and catching duplicates, which keeps the point system fair and the data clean.

## The Dashboard

The web dashboard is the main way EcoMunity sees its impact. It plots trash entries on an interactive map, with each cleanup session getting its own view, so sessions can be compared to one another over time. Heatmaps show where trash tends to cluster, whether that's a parking lot, a courtyard, or a cafeteria area, and repeated sessions reveal which hotspots keep returning and which improve after new bins or signs go in.

The dashboard also summarizes each session with stats like total logs, verified entries, and top activity areas, and supports exporting that data for meetings, presentations, or funding requests.

## Why It Matters

Every verified photo becomes part of a real dataset of campus litter, which can later be used to retrain the YOLO model on actual local conditions, like lighting, backgrounds, and the specific kinds of waste found on this campus, instead of relying on generic online datasets. That sets up a loop: students submit photos, the app validates and stores them, the dataset grows, and future models improve on better data.

More broadly, this gives EcoMunity a way to prove its impact instead of just describing it. Rather than saying an area "seems dirty," the club can point to repeated map data, photo evidence, and hotspot patterns built up across multiple sessions. The same approach could extend past one school too. Plenty of cleanup groups do the work but lack the data to back it up, and a session-based app like this could help them make their case as well.

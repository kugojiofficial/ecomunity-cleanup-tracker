import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
}

if (!serviceRoleKey) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
}

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

type ApiResponse =
  | {
      success: true;
      trash_log: unknown;
    }
  | {
      success: false;
      error: string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  try {
    const {
      device_id = "eco_watch_01",
      session_id = "test_session",
      latitude,
      longitude,
      accuracy_meters = null,
      timestamp = new Date().toISOString(),
    } = req.body;

    if (typeof latitude !== "number" || typeof longitude !== "number") {
      return res.status(400).json({
        success: false,
        error: "Latitude and longitude must be numbers.",
      });
    }

    if (latitude < -90 || latitude > 90) {
      return res.status(400).json({
        success: false,
        error: "Latitude is out of range.",
      });
    }

    if (longitude < -180 || longitude > 180) {
      return res.status(400).json({
        success: false,
        error: "Longitude is out of range.",
      });
    }

    const { data, error } = await supabaseAdmin
      .from("trash_logs")
      .insert({
        device_id,
        session_id,
        latitude,
        longitude,
        accuracy_meters,
        timestamp,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return res.status(500).json({
        success: false,
        error: "Failed to insert trash log.",
      });
    }

    return res.status(200).json({
      success: true,
      trash_log: data,
    });
  } catch (error) {
    console.error("API error:", error);

    return res.status(400).json({
      success: false,
      error: "Invalid request.",
    });
  }
}
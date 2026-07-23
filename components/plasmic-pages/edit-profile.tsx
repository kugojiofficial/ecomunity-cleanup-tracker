import * as React from "react";
import { useEffect, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicEditProfile } from "../plasmic/eco_munity_cleanup_tracker/PlasmicEditProfile";
import { getMyProfile, updateMyName, validateName, useRequireAuth } from "../../lib/api";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

function EditProfile() {
  const router = useRouter();
  const { user } = useRequireAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstError, setFirstError] = useState<string | null>(null);
  const [lastError, setLastError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await getMyProfile();
      if (cancelled || !res.success || !res.data) return;
      setFirstName(res.data.first_name ?? "");
      setLastName(res.data.last_name ?? "");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleContinue() {
    if (busy) return;
    const fErr = validateName(firstName, "your first name");
    const lErr = validateName(lastName, "your last name");
    setFirstError(fErr);
    setLastError(lErr);
    if (fErr || lErr) return;

    setBusy(true);
    const res = await updateMyName(firstName, lastName);
    setBusy(false);
    if (!res.success) {
      setFirstError(res.error);
      return;
    }
    router.push("/profile");
  }

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicEditProfile
          firstNameContainer={{
            value: firstName,
            onChange: (v: string) => {
              setFirstName(v.replace(/\s/g, ""));
              if (firstError) setFirstError(null);
            },
          }}
          lastNameContainer={{
            value: lastName,
            onChange: (v: string) => {
              setLastName(v.replace(/\s/g, ""));
              if (lastError) setLastError(null);
            },
          }}
          firstNameError={{ style: firstError ? SHOWN : HIDDEN }}
          firstNameErrorContent={{ children: firstError ?? "" }}
          lastNameError={{ style: lastError ? SHOWN : HIDDEN }}
          lastNameErrorContent={{ children: lastError ?? "" }}
          continueButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleContinue();
            },
          }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default EditProfile;

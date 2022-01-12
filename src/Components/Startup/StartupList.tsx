import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";
import Card from '@mui/material/Card';
import { CardContent, CardHeader, Typography } from "@mui/material";

export default function StartupList(): ReactElement {
  const [startUps, setStartUps] = useState([] as Startup[]);

  useEffect(() => {
    StartupHttpService.getStartups().then((startUps) => {
      setStartUps(startUps);
    })
  }, []
  )

  return <Fragment>
    {
      startUps.map(startup => {
        return <Card key={startup.id}>
          <CardHeader title={startup.name} />
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`Founded: ${startup.dateFounded.getFullYear()} | ${startup.employees} Employees | ${startup.totalFunding} $ | ${startup.currentInvestmentStage}`}
            </Typography>
            <Typography variant="body2">
              {startup.shortDescription}
            </Typography>
          </CardContent>
        </Card>
      })
    }
  </Fragment>;
}


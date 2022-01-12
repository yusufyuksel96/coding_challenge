import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";
import Card from '@mui/material/Card';
import { CardContent, CardHeader } from "@mui/material";

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

          </CardContent>
        </Card>
      })
    }
  </Fragment>;
}


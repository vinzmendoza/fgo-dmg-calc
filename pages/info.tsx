import { NextPage } from "next";
import React from "react";
import { PageLayout } from "../common/components/PageLayout";

const Notes: NextPage = () => {
  /* TODO */
  return (
    <PageLayout title="Info">
      <div className="flex flex-col gap-8 mb-60 ">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Servants</h2>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>
              Servants with no damaging Noble Phantasm can still be selected but
              the result will display a value of 0 on all damage result fields.
            </li>
            <li>
              Manannán mac Lir (Bazett) NP damage calculation is currently not
              available.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Buffs and Debuffs</h2>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>
              Servant passives &#x28;ex. divinity, riding, mad enhancement,
              etc.&#x29; are already included in the calculation and does not
              need manual input.
            </li>{" "}
            <li>
              Archetype: Earth&apos;s Noble Phantasm that applies Millenium
              Castle Battlefield &#x28;30% Buster, Arts, Quick Card
              Modifier&#x29; for herself is already included in the calculation
              and does not need manual input.
            </li>
            <li>
              Buffs that activates first before the Noble Phantasm deals damage
              must be manually inputted &#x28;ex. Ishtar increases own Buster
              damage for 1 turn before her Noble Phantasm damage hits&#x29;.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Others</h2>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>
              If you encounter any bugs or issues, please contact
              &#x28;Vinz#0775&#x29; on Discord.
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default Notes;

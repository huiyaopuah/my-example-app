//import React, { useState, useContext } from "react";
import { useContext } from "react";
import LocalizedStrings from "react-localization";
import {localization} from "../../localization/index";
import { AuthContext } from "~/context/AuthContext";

export default function useTranslation() {
  const { language } = useContext(AuthContext);
  let translation = new LocalizedStrings(localization);

  translation.setLanguage(language);
  return translation;
}

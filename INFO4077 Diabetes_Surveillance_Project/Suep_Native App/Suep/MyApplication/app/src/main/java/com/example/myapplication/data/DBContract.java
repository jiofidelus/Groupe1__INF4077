package com.example.myapplication.data;

import android.provider.BaseColumns;

public final class DBContract {
    private DBContract(){}

    public static final class PatientEntry implements BaseColumns{

        public final static String _ID=BaseColumns._ID;
        public final static String COLUMN_PATIENT_NAME="name";
        public final static String COLUMN_PATIENT_PRENAME="prename";
        public final static String COLUMN_PATIENT_TELEPHONE="telephone";
        public final static String COLUMN_PATIENT_EMAIL="email";
        public final static String COLUMN_PATIENT_DOB="dob";
        public final static String COLUMN_PATIENT_CITY="city";
        public final static String COLUMN_PATIENT_QUARTER="quarter";




    }
}

package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.database.Cursor;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class StatistiquesActivity extends AppCompatActivity {
    DatabaseHelper myDB;
    RecyclerView recyclerView;

    ArrayList<String> stat_ville, stat_nbcas;
    StatAdapter statAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_statistiques);

        recyclerView = findViewById(R.id.recyclerView);
        myDB = new DatabaseHelper(StatistiquesActivity.this);
        stat_ville = new ArrayList<>();
        stat_nbcas = new ArrayList<>();

        storeDataInArray();
        statAdapter = new StatAdapter(StatistiquesActivity.this, stat_ville, stat_nbcas);
        recyclerView.setAdapter(statAdapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(StatistiquesActivity.this));
    }

    void storeDataInArray(){
        Cursor cursor = myDB.getListCity();
        if(cursor.getCount() == 0){
            Toast.makeText(this, "Aucun cas enregistré",Toast.LENGTH_SHORT).show();
        }else{
            while(cursor.moveToNext()){
                stat_ville.add(cursor.getString(0));
                stat_nbcas.add(cursor.getString(1));
            }
        }
    }
}
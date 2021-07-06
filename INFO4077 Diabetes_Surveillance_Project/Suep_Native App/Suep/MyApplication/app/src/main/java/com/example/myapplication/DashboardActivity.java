package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;

public class DashboardActivity extends AppCompatActivity implements View.OnClickListener {

    private CardView mCardView1;
    private CardView mCardView2;
    private CardView mCardView3;
    private CardView mCardView4;
    private CardView mCardView5;
    private CardView mCardView6;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);

        mCardView1 = (CardView) findViewById(R.id.activity_dasbloard_card1);
        mCardView2 = (CardView) findViewById(R.id.activity_dasbloard_card2);
        mCardView3 = (CardView) findViewById(R.id.activity_dasbloard_card3);
        mCardView4 = (CardView) findViewById(R.id.activity_dasbloard_card4);
        mCardView5 = (CardView) findViewById(R.id.activity_dasbloard_card5);
        mCardView6 = (CardView) findViewById(R.id.activity_dasbloard_card6);

        mCardView1.setOnClickListener(this);
        mCardView2.setOnClickListener(this);
        mCardView3.setOnClickListener(this);
        mCardView4.setOnClickListener(this);
        mCardView5.setOnClickListener(this);
        mCardView6.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.activity_dasbloard_card1:
                Intent intent = new Intent(getApplicationContext(), AddPatientActivity.class);
                startActivity(intent);
                break;
            case R.id.activity_dasbloard_card2:
                intent = new Intent(getApplicationContext(), SympthomesActivity.class);
                startActivity(intent);
                break;
            case R.id.activity_dasbloard_card3:
                intent = new Intent(getApplicationContext(), ListPatientsActivity.class);
                startActivity(intent);
                break;
            case R.id.activity_dasbloard_card4:
                intent = new Intent(getApplicationContext(), MapsActivity.class);
                startActivity(intent);
                break;
            case R.id.activity_dasbloard_card5:
                intent = new Intent(getApplicationContext(), StatistiquesActivity.class);
                startActivity(intent);
                break;
            case R.id.activity_dasbloard_card6:
                intent = new Intent(getApplicationContext(), MessageActivity.class);
                startActivity(intent);
                break;
        }
    }
}
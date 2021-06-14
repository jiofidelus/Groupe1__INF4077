package com.example.myapplication;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class StatAdapter extends RecyclerView.Adapter<StatAdapter.StatViewHolder> {

    private Context context;
    private ArrayList stat_ville, stat_nbcas;

    StatAdapter(Context context,ArrayList stat_ville, ArrayList stat_nbcas) {
        this.context = context;
        this.stat_ville = stat_ville;
        this.stat_nbcas = stat_nbcas;
    }

    @NonNull
    @Override
    public StatViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.stat_row, parent,false);
        return new StatViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull StatViewHolder holder, int position) {
        holder.stat_ville_txt.setText(String.valueOf(stat_ville.get(position)));
        holder.stat_nbcas_txt.setText(String.valueOf(stat_nbcas.get(position)));
    }

    @Override
    public int getItemCount() {
        return stat_ville.size();
    }

    public class StatViewHolder extends RecyclerView.ViewHolder {
        TextView stat_ville_txt, stat_nbcas_txt;
        public StatViewHolder(@NonNull View itemView) {
            super(itemView);
            stat_ville_txt = itemView.findViewById(R.id.stat_ville);
            stat_nbcas_txt = itemView.findViewById(R.id.stat_nbcas);
        }
    }
}

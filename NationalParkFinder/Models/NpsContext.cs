using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace NationalParkFinder.Models;

public partial class NpsContext : DbContext
{
    public NpsContext()
    {
    }

    public NpsContext(DbContextOptions<NpsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AdventureLog> AdventureLogs { get; set; }

    public virtual DbSet<Badge> Badges { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<UserAdventureLog> UserAdventureLogs { get; set; }

    public virtual DbSet<UserBadge> UserBadges { get; set; }

    public virtual DbSet<UserProfile> UserProfiles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=nps4567890.database.windows.net; Initial Catalog=NPS; User ID=NationalParkProject; Password=NationalP@rk; TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AdventureLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Adventur__3214EC07E0E02D03");

            entity.ToTable("AdventureLog");

            entity.Property(e => e.ParkId).HasColumnName("ParkID");
        });

        modelBuilder.Entity<Badge>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Badges__3214EC0703F3AFB1");

            entity.Property(e => e.Badge1).HasColumnName("Badge");
            entity.Property(e => e.BadgeImg).HasColumnName("BadgeIMG");
        });

        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC079756E997");

            entity.Property(e => e.ParkId).HasColumnName("ParkID");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Favorites__UserI__7A672E12");
        });

        modelBuilder.Entity<UserAdventureLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UserAdve__3214EC078D1298A9");

            entity.ToTable("UserAdventureLog");

            entity.Property(e => e.AdventureId).HasColumnName("AdventureID");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Adventure).WithMany(p => p.UserAdventureLogs)
                .HasForeignKey(d => d.AdventureId)
                .HasConstraintName("FK__UserAdven__Adven__7D439ABD");

            entity.HasOne(d => d.User).WithMany(p => p.UserAdventureLogs)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__UserAdven__UserI__7E37BEF6");
        });

        modelBuilder.Entity<UserBadge>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UserBadg__3214EC07C0CEA1F4");

            entity.Property(e => e.BadgeId).HasColumnName("BadgeID");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Badge).WithMany(p => p.UserBadges)
                .HasForeignKey(d => d.BadgeId)
                .HasConstraintName("FK__UserBadge__Badge__76969D2E");

            entity.HasOne(d => d.User).WithMany(p => p.UserBadges)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__UserBadge__UserI__778AC167");
        });

        modelBuilder.Entity<UserProfile>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UserProf__3214EC07A3328997");

            entity.ToTable("UserProfile");

            entity.Property(e => e.GoogleId).HasColumnName("GoogleID");
            entity.Property(e => e.Hometown).HasMaxLength(60);
            entity.Property(e => e.Region).HasMaxLength(40);
            entity.Property(e => e.UserName).HasMaxLength(40);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

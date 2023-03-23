using System;
using System.Collections.Generic;

namespace NationalParkFinder.Models;

public partial class AdventureLog
{
    public int Id { get; set; }

    public string? ParkId { get; set; }

    public string? Details { get; set; }

    public int? Rating { get; set; }

    public string? Title { get; set; }

    public int? UserId { get; set; }

    public virtual UserProfile? User { get; set; }
}

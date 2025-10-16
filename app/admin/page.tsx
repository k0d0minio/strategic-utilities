"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import type { FormSubmission } from "@/lib/db";
import { Download, Eye, EyeOff, RefreshCw, X } from "lucide-react";
import { useState } from "react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [showPassword, setShowPassword] = useState(false);
  const [activeSubmission, setActiveSubmission] =
    useState<FormSubmission | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        setIsAuthenticated(true);
        fetchSubmissions();
      } else {
        setError("Invalid password");
      }
    } catch (err) {
      setError("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/submissions", {
        cache: "no-store"
      });
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions);
      } else {
        setError("Failed to fetch submissions");
      }
    } catch (err) {
      setError("Failed to fetch submissions");
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const filteredSubmissions =
      filterType === "all"
        ? submissions
        : submissions.filter((s) => s.form_type === filterType);

    const headers = ["ID", "Form Type", "Email", "Name", "Phone", "Created At"];
    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((sub) => {
        const data = sub.data as any;
        return [
          sub.id,
          sub.form_type,
          data.email || "",
          data.name || data.parentName || "",
          data.phone || "",
          new Date(sub.created_at).toLocaleString()
        ]
          .map((field) => `"${field}"`)
          .join(",");
      })
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `form-submissions-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredSubmissions =
    filterType === "all"
      ? submissions
      : submissions.filter((s) => s.form_type === filterType);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Enter password to access form submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Authenticating..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Form Submissions
          </h1>
          <p className="text-gray-600">View and manage all form submissions</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by form type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Forms</SelectItem>
                <SelectItem value="contact">Contact</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={fetchSubmissions}
              variant="outline"
              disabled={loading}
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button onClick={exportToCSV} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-8">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p>Loading submissions...</p>
          </div>
        )}

        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="p-4">
              <p className="text-red-700">{error}</p>
            </CardContent>
          </Card>
        )}

        {!loading && !error && (
          <Card>
            <CardHeader>
              <CardTitle>Submissions ({filteredSubmissions.length})</CardTitle>
              <CardDescription>
                Showing {filteredSubmissions.length} of {submissions.length}{" "}
                total submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredSubmissions.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No submissions found for the selected filter.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">ID</th>
                        <th className="text-left p-3 font-medium">Form Type</th>
                        <th className="text-left p-3 font-medium">Email</th>
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Phone</th>
                        <th className="text-left p-3 font-medium">Created</th>
                        <th className="text-left p-3 font-medium">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubmissions.map((submission) => {
                        const data = submission.data as any;
                        return (
                          <tr
                            key={submission.id}
                            className="border-b hover:bg-gray-50"
                          >
                            <td className="p-3 text-sm">{submission.id}</td>
                            <td className="p-3 text-sm">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                {submission.form_type.replace("_", " ")}
                              </span>
                            </td>
                            <td className="p-3 text-sm">{data.email || "-"}</td>
                            <td className="p-3 text-sm">
                              {data.name || data.parentName || "-"}
                            </td>
                            <td className="p-3 text-sm">{data.phone || "-"}</td>
                            <td className="p-3 text-sm">
                              {new Date(
                                submission.created_at
                              ).toLocaleDateString()}
                            </td>
                            <td className="p-3 text-sm">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setActiveSubmission(submission)}
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeSubmission && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-2xl rounded-lg bg-white shadow-lg border max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
                <div>
                  <h3 className="text-lg font-semibold">Submission Details</h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {activeSubmission.form_type.replace("_", " ")}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveSubmission(null)}
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground">ID</div>
                    <div className="text-sm">{activeSubmission.id}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Created</div>
                    <div className="text-sm">
                      {new Date(activeSubmission.created_at).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {Object.entries(
                    activeSubmission.data as Record<string, any>
                  ).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-start justify-between gap-4 border rounded-md p-3"
                    >
                      <div className="text-sm font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div className="text-sm text-muted-foreground max-w-[70%] break-words">
                        {typeof value === "object"
                          ? JSON.stringify(value)
                          : String(value || "-")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t flex justify-end gap-2 flex-shrink-0">
                <Button
                  variant="outline"
                  onClick={() => setActiveSubmission(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
